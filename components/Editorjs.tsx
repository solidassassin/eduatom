import React from "react";
import Editor from "react-editor-js";
import { EDITOR_JS_TOOLS } from "utils/editor-tools";
import type { API, OutputData } from "@editorjs/editorjs";

type Props = {
  onChange?: (api: API, data?: OutputData) => void;
  data?: OutputData;
  readOnly?: boolean;
};

const EditorJS: React.FC<Props> = (props: Props) => {
  return (
    <Editor
      tools={EDITOR_JS_TOOLS}
      onChange={props.onChange}
      data={props.data}
      readOnly={props.readOnly}
      autofocus={true}
    />
  );
};

export default EditorJS;
