
interface RendererProps{
    postContent?: string;
}
const Renderer : React.FC<RendererProps> = ({postContent}) => {
    return (
        <>
        <div className="bg-green-500">Renderer</div>
        <label>{postContent}</label>
        </>
    );
}
export default Renderer; 