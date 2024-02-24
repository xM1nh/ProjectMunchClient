import { describe, test, it, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { useFetch } from "./useFetch";

describe("useFetch", () => {
  it("GET should return instance on success", () => {
    type stubType = {
      prop1?: string;
      prop2?: number;
      prop3?: [];
    };
    const stubResponse: stubType = {};

    const { result } = renderHook(() => useFetch({ url: "", method: "GET" }));

    expect(result.current.data).toEqual(stubResponse);
  });
});
