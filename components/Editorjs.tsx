import Editor from "react-editor-js";
import { EDITOR_JS_TOOLS } from "utils/editor-tools";
import type { API, OutputData } from "@editorjs/editorjs";

type Props = {
  onChange?: (api: API, data?: OutputData) => void;
};

export default function EditorJS(props: Props) {

  return (
    <Editor
      tools={EDITOR_JS_TOOLS}
      onChange={props.onChange}
    />
  );
}
