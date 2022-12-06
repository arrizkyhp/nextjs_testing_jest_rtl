import { fireEvent, render } from "@testing-library/react";

import Counter from "./Counter";

describe(Counter, () => {
  it("Should displays correct initial count", () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    const countValue = Number(getByTestId("count").textContent);

    expect(countValue).toEqual(0);
  });

  it("Should increment counter by 1 if button increment clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);

    const incrementButton = getByRole("button", { name: "Increment" });
    const countValueBefore = Number(getByTestId("count").textContent);
    expect(countValueBefore).toEqual(0);

    fireEvent.click(incrementButton);

    const countValueAfter = Number(getByTestId("count").textContent);
    expect(countValueAfter).toEqual(1);
  });

  it("Should decrement counter by 1 if button decrement clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);

    const decrementButton = getByRole("button", { name: "Decrement" });
    const countValueBefore = Number(getByTestId("count").textContent);
    expect(countValueBefore).toEqual(0);

    fireEvent.click(decrementButton);

    const countValueAfter = Number(getByTestId("count").textContent);
    expect(countValueAfter).toEqual(-1);
  });

  it("Should restart counter back to 0 if button restart clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);

    const decrementButton = getByRole("button", { name: "Decrement" });
    const restartButton = getByRole("button", { name: "Restart" });
    const countValueBefore = Number(getByTestId("count").textContent);
    expect(countValueBefore).toEqual(0);

    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);

    const countValueAfter = Number(getByTestId("count").textContent);
    expect(countValueAfter).toEqual(-2);

    fireEvent.click(restartButton);

    const countValueRestart = Number(getByTestId("count").textContent);
    expect(countValueRestart).toEqual(0);
  });

  it("Should switch counter from minus to plus if button switch clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);

    const decrementButton = getByRole("button", { name: "Decrement" });
    const switchButton = getByRole("button", { name: "Switch Signs" });
    const countValueBefore = Number(getByTestId("count").textContent);
    expect(countValueBefore).toEqual(0);

    fireEvent.click(decrementButton);

    const countValueAfter = Number(getByTestId("count").textContent);
    expect(countValueAfter).toEqual(-1);

    fireEvent.click(switchButton);

    const countValueSwitch = Number(getByTestId("count").textContent);
    expect(countValueSwitch).toEqual(1);
  });
});
