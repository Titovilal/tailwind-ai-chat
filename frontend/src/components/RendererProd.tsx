import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

interface RendererProps{
    postContent?: string;
}

const RendererProd : React.FC<RendererProps> = ({postContent}) => {
   
    const htmlFrom = (htmlString: string) => {
        const cleanHtmlString = DOMPurify.sanitize(htmlString,
          { USE_PROFILES: { html: true } });
        const html = parse(cleanHtmlString);
        return html;
    }
    
    return (
        <>
        <div className="bg-green-500">Renderer</div>
        <div>
            {postContent && htmlFrom(postContent)}
        </div>
        </>
    );
}
export default RendererProd;
