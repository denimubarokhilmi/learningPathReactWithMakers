import { lazy, Suspense, useState, useRef, useEffect } from "react";

function delay(comp) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(comp), 2000);
  });
}

const CompMarkdown = lazy(async () => await delay(import("./Markdown.jsx")));

export default function LazyLoading() {
  const markdownText = "hello lazy";
  const [preview, setPreview] = useState(false);

  const previewRef = useRef(null);

  useEffect(() => {
    if (preview && previewRef.current) {
      previewRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [preview]);

  return (
    <>
      <h4>Example lazy component:</h4>

      <label>
        {preview ? "hide preview" : "show preview"}
        <input
          type="checkbox"
          checked={preview}
          onChange={(e) => setPreview(e.target.checked)}
        />
      </label>

      {preview && (
        <div ref={previewRef}>
          <Suspense fallback={<p>Loading...</p>}>
            <CompMarkdown markdown={markdownText} />
          </Suspense>
        </div>
      )}
    </>
  );
}
