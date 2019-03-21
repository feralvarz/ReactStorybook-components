import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Task from "../components/Task";

export function createTask(attrs) {
  return {
    id: Math.round(Math.random() * 1000000).toString(),
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: Date.now(),
    ...attrs
  };
}

export const task = {
  id: "1",
  title: "Test Task",
  state: "TASK_INBOX",
  updatedAt: new Date(2018, 0, 1, 9, 0)
};

export const actions = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask")
};

storiesOf("Task", module)
  .addDecorator(story => <div style={{ padding: "3rem" }}>{story()}</div>)
  .add("default", () => <Task task={task} {...actions} />)
  .add("pinned", () => (
    <Task task={{ ...task, state: "TASK_PINNED" }} {...actions} />
  ))
  .add("archived", () => (
    <Task task={{ ...task, state: "TASK_ARCHIVED" }} {...actions} />
  ));
