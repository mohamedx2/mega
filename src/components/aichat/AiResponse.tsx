import TableBlock from "./tableBlock";

type textType = 'code' | 'table' | 'text'
export default function AiResponse({ response }: { response: string }) {
  const parsedResponse = parseResponse(response)

  return (
    <div className="border p-4 rounded-lg mb-4">
      {parsedResponse.map((data, index)=>{
        if(data.type === "text"){
          return data.content.map((l, i)=>
          <p key={l + i} className={l.startsWith("**") && l.endsWith("**") ? "font-bold text-lg" : ""}>{
            l.startsWith("**") && l.endsWith("**") ? l.slice(2, -2) : 
            <span dangerouslySetInnerHTML={{ __html: l.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
          }</p>
        )
        }
        else if (data.type === "table"){
          return (<TableBlock key={index} data={data.content} />)
        }
      })}
    </div>
  );
}

function parseResponse(response: string) {
  let parsedResponse: { type:textType , content: string[] }[] = [];
  let currentType: textType = 'text';
  let currentContent: string[] = [];

  const lines = response.split('\n');

  lines.forEach(line => {
    if (line.trim().startsWith('```')) {
      if (currentContent.length > 0) {
        if(currentType === "code") currentContent.push(line);
        parsedResponse.push({ type: currentType, content: currentContent });
        currentContent = [];
        if(currentType !== "code") currentContent.push(line);
      }else{
        currentContent.push(line);
      }
      currentType = currentType === 'code' ? 'text' : 'code';

    }else if (line.trim().startsWith('|')) {
      if(currentContent.length > 0 && currentType !== 'table'){
        parsedResponse.push({ type: currentType, content: currentContent });
        currentContent = [];
      }
      currentType = 'table';
      currentContent.push(line)
    } else {
      if(currentType === "table"){
        parsedResponse.push({ type: currentType, content: currentContent });
        currentContent = [];
        currentType = 'text';
      }
      currentContent.push(line);
    }
  });

  if (currentContent.length > 0) {
    parsedResponse.push({ type: currentType, content: currentContent });
  }

  return parsedResponse;
}