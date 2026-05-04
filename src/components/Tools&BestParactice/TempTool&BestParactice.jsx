import FormNotUseCustomHook from "./CustomHook/NotUseCustomHook";
import FormWithCustomHook from "./CustomHook/UseCustomHook";
export default function TempToolBestParactice() {
  return (
    <div className="tool-best-paractice">
      <FormNotUseCustomHook></FormNotUseCustomHook>
      <FormWithCustomHook></FormWithCustomHook>
    </div>
  );
}
