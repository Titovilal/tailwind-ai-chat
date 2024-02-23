import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

interface RendererProps{
    postContent?: string;
}
const Renderer : React.FC<RendererProps> = ({postContent}) => {
    const htmlFrom = (htmlString: string) => {
        const cleanHtmlString = DOMPurify.sanitize(htmlString,
          { USE_PROFILES: { html: true } });
        const html = parse(cleanHtmlString);
        return html;
}
    return (
        <>
        <div className="bg-green-500">Renderer</div>
        <div className="flex justify-center items-center h-full">
            {postContent && htmlFrom(postContent)}
        </div>
           
        
        </>
    );
}
export default Renderer; 