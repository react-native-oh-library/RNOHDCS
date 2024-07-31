import * as React from "react";

import { Colors, Shadows } from "../../components";
import { TestGroup } from "../../types";
import { TestView } from "./TestView";

export const ViewTests: TestGroup = {
  name: "Views",
  tests: [
    {
      name: "View Move & Scale",
      tests: [
        {
          name: "Simple move",
          description:
            "The most basic form of a shared-element transition. The view should move smoothly without flickering from the start- to the end state, and back",
          start: <TestView />,
          end: <TestView end />,
        },
        {
          name: "Move & scale",
          description:
            "Another basic form of a shared-element transition. The view should move & scale correctly without flickering from the start- to the end state, and back",
          start: <TestView size="small" />,
          end: <TestView end size="large" />,
        },
        {
          name: "Full size",
          description: "TODO",
          start: <TestView size="small" />,
          end: <TestView end size="max" />,
        },
        {
          name: "Fade",
          start: <TestView size="regular" />,
          end: <TestView end size="regular" color={Colors.yellow} />,
          animation: "fade",
        },
        {
          name: "Fade & border-radius",
          start: <TestView size="regular" />,
          end: <TestView end size="large" round color={Colors.yellow} />,
          animation: "fade",
        },
      ],
    },
  ],
};
