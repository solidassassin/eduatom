import React from "react";
import Editor from "react-editor-js";
import { EDITOR_JS_TOOLS } from "utils/editor-tools";
import type { API, OutputData } from "@editorjs/editorjs";

type Props = {
  onChange?: (api: API, data?: OutputData) => void;
  data?: OutputData;
  readOnly?: boolean;
};

export default function EditorJS(props: Props) {

  return (
    <Editor
      tools={EDITOR_JS_TOOLS}
      onChange={props.onChange}
      data={props.data}
      readOnly={props.readOnly}
      autofocus={true}
    />
  );
}
