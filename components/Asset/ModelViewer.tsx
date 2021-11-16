declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        interface IntrinsicElements {
            "model-viewer": any;
        }
    }
}
const ModelViewer: React.FC<{
    src: string;
}> = ({ src }) => (
    <model-viewer
        src={src}
        className={"singleAssetModel"}
        style={{width:"100%", height:"100%", background:"#fff"}}
        alt="A 3D model of an astronaut"
        auto-rotate
        camera-controls
        environment-image="neutral"
        directColor="#fff"
        camera-orbit="270deg 90deg"
        ar-status = "not-presenting"
        // ambientIntensity = "2"
        // directIntensity = "4"
        // environment-image="neutral"
        // ambientIntensity = "1"
        // exposure  = "10"
        // camera-orbit="calc(1.5rad + env(window-scroll-y) * 2rad) calc(0deg + env(window-scroll-y) * 160deg) calc(1m - env(window-scroll-y) * 1.5m)" 
    />
);

export default ModelViewer;
