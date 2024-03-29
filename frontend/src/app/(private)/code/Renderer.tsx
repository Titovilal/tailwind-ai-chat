import parse from "html-react-parser";
import DOMPurify from "dompurify";

interface RendererProps {
  postContent?: string;
}

const tailwind = `<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css');
</style>`;

const Renderer: React.FC<RendererProps> = ({ postContent }) => {
  const htmlFrom = (htmlString: string) => {
    const cleanHtmlString = DOMPurify.sanitize(htmlString, {
      USE_PROFILES: { html: true },
    });
    const html = parse(cleanHtmlString);
    return html;
  };

  const setTailwindCSS = (htmlString: string) => {
    return { __html: htmlString };
  };
  return (
    <div className="bg-base pr-4 pb-4 pt-2 grid grid-rows-[2rem,1fr] min-h-screen">
      <h2 className="text-neutral font-bold flex justify-center">Renderer</h2>

      <div className="bg-neutral flex justify-center items-center rounded-lg">
        <div dangerouslySetInnerHTML={setTailwindCSS(tailwind)} />
        {postContent && htmlFrom(postContent)}
      </div>
    </div>
  );
};
export default Renderer;
