import { default as SyntaxHighlighter } from 'react-syntax-highlighter';


interface Props {
  responseData: any;
}

const ResponseFlightsDisplay = ({ responseData }: Props) => {
  return (
    <pre className="json-pretty">
      <SyntaxHighlighter language="json">
        {JSON.stringify(responseData, null, 2)}
      </SyntaxHighlighter>
    </pre>
  );
};

export default ResponseFlightsDisplay;