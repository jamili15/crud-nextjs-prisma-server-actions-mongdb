import React from "react";
import Form from "../Form";
import Button from "../Button";
import Input from "../Input";
import * as actions from "@/service/_actions/actions";
import TextArea from "../TextArea";

const CreatePost = () => {
  return (
    <Form
      action={actions.createPost}
      className="flex flex-col gap-y-2 w-[300px]"
    >
      <Input name={"title"} type={"text"} placeholder="Add Title Here..." />
      <TextArea name={"content"} placeholder="Add Content Here..." />
      <Button type="submit" text={"create post"} bgColor="bg-blue-500" />
    </Form>
  );
};

export default CreatePost;
