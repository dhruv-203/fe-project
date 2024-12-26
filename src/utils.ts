import { toast, TypeOptions } from "react-toastify";

export function scrollUp(
  isMobile: boolean,
  scrollBehavior: ScrollBehavior,
  mobileValue: number,
  desktopValue: number
) {
  window.scrollTo({
    top: isMobile ? mobileValue : desktopValue,
    behavior: scrollBehavior,
  });
}

export enum SortOptions {
  Rating = "Rating",
  Name = "Name",
  LowestPrice = "Lowest Price",
  HighestPrice = "Highest Price",
}

export const toBrandsNameArray = (selectedBrands: {
  [key: string]: boolean;
}) => {
  return Object.entries(selectedBrands)
    .filter(([_, selected]) => selected)
    .map(([brand]) => brand);
};

export function toQueryString(args: { [key: string]: any }): string {
  const temp = Object.keys(args).reduce((acc, curr) => {
    return { ...acc, [curr]: String(args[curr]) };
  }, {});
  const urlParams = new URLSearchParams(temp);
  return urlParams.toString();
}

export const toastify = (message: string, type: TypeOptions) => {
  toast<string>(message, {
    position: "top-right",
    autoClose: 2000,
    type: type,
  });
};

export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
type DebouncerFunction = (...args: any[]) => void;

type ImmediateFunction = (...args: any[]) => void;
type DelayedFunction = (...args: any[]) => void;
//provide the args to the each function in terms of array
/*
example use 
const debouncedFn = createDebouncer(immediateFn, delayedFn, 1000);

debouncedFn(["Call 1"], [42]);
debouncedFn(["Call 2"], [43]);
setTimeout(() => debouncedFn(["Call 3"], [44]), 500); // Immediate executed, delay resets
setTimeout(() => debouncedFn(["Call 4"], [45]), 1500); // Delayed executed after 1.5s from previous call

*/
export function createCustomDebouncer(
  immediateFn: ImmediateFunction,
  delayedFn: DelayedFunction,
  delay: number
): DebouncerFunction {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: any[]) => {
    const [immediateArgs, delayedArgs] = args;

    // Call the immediate function every time the returned function is called
    if (immediateArgs) {
      immediateFn(...immediateArgs);
    }

    // Clear the existing timeout if any
    if (timeout) {
      clearTimeout(timeout);
    }

    // Set up the delayed function to execute after the delay
    timeout = setTimeout(() => {
      if (delayedArgs) {
        delayedFn(...delayedArgs);
      }
      timeout = null; // Reset timeout after execution
    }, delay);
  };
}
