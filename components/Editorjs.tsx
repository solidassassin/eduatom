import Editor from "react-editor-js";
import { EDITOR_JS_TOOLS } from "utils/editor-tools";

export default function EditorJS() {
  return <Editor tools={EDITOR_JS_TOOLS} />;
}
