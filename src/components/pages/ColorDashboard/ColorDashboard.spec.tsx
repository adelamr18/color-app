import { shallow, ShallowWrapper } from "enzyme";
import ColorDashboard from "./ColorDashboard";
import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
const queryClient = new QueryClient();

describe("<ColorDashboard> Component", () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(
      <QueryClientProvider client={queryClient}>
        <ColorDashboard></ColorDashboard>
      </QueryClientProvider>
    );
  });

  describe("Rendering ColorDashboard component", () => {
    it("should exist", () => {
      expect(component.instance()).toBeDefined();
      expect(component).toHaveLength(1);
    });

    it("Should have a section", () => {
      expect(component.find("section")).toBeDefined();
    });

    it("Should have inputs from the color form", () => {
      expect(component.find("input")).toBeDefined();
    });

  });
});
