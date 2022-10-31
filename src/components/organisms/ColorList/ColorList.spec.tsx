import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import ColorList from "./ColorList";
import Button from "../../atoms/Button/Button";

describe("<ColorList> Component", () => {
  const onColorUpdateHandler = jest.fn();
  const onColorDeletionHandler = jest.fn();
  const data = {
    colors: [
      {
        id: 1,
        colorName: "dhd",
        hexValue: "111",
      },
    ],
  };
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(
      <ColorList onColorUpdate={onColorUpdateHandler} onColorDelete={onColorDeletionHandler} colors={data?.colors}></ColorList>
    );
  });

  describe("Rendering ColorList component", () => {

    it("should exist", () => {
      expect(component.instance()).toBeDefined();
      expect(component).toHaveLength(1);
    });

    it("Should assert that it has only one child", () => {
      expect(component.children).toHaveLength(1);
    });

    it("Should expect to find 2 buttons one for Update and the other for Delete", () => {
      expect(component.find(Button)).toHaveLength(2);
      component.find(Button).at(0).simulate("click");
      expect(onColorUpdateHandler).toHaveBeenCalled();
    });

    it("Should expect to call onColorUpdateHandler one time when child button component is clicked", () => {
      component.find(Button).at(0).simulate("click");
      expect(onColorUpdateHandler).toHaveBeenCalled();
      expect(onColorUpdateHandler).toHaveBeenCalledTimes(1);
    });

    it("Should expect to call onColorDeletionHandler one time when child button component is clicked", () => {
      component.find(Button).at(1).simulate("click");
      expect(onColorDeletionHandler).toHaveBeenCalled();
      expect(onColorDeletionHandler).toHaveBeenCalledTimes(1);
    });
  });
});
