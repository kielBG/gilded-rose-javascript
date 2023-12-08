import { expect, describe, it } from "vitest";
import { Item, items, updateQuality } from "./gilded-rose.js";

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Item("basic", 5, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });
});

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 2 and qualtiy doesn't drop bellow zero", () => {
    const testItem = new Item("basic", 3, 1);
    items.push(testItem);

    updateQuality();
    updateQuality();

    expect(testItem.quality).toBe(0);
    expect(testItem.sellIn).toBe(1);
  });
});

describe("updateQuality", () => {
  it("reduces quality and sellin to test that after sellIn is less than zero quality degrades twice as fast", () => {
    const testItem = new Item("basic", 0, 4);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(-1);
  });
});

describe("updateQuality", () => {
  it("reduces sellIn of Aged Brie and quality increases, also quality not greater than 50", () => {
    const testItem = new Item("Aged Brie", 5, 49);
    items.push(testItem);

    updateQuality();
    updateQuality();

    expect(testItem.quality).toBe(50);
    expect(testItem.sellIn).toBe(3);
  });
});

describe("updateQuality", () => {
  it("Sulfras, Hand of Ragnaros doesn't decrease in quality", () => {
    const testItem = new Item("Sulfuras, Hand of Ragnaros", 0, 80);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(80);
    expect(testItem.sellIn).toBe(0);
  });
});

describe("updateQuality", () => {
  it("Backstage passes to a TAFKAL80ETC concert quality increases by 2 at less than 10 days", () => {
    const testItem = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(22);
    expect(testItem.sellIn).toBe(9);
  });

  it("Backstage passes to a TAFKAL80ETC concert quality increases by 3 at less than 5 days", () => {
    const testItem = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(23);
    expect(testItem.sellIn).toBe(4);
  });

  it("Backstage passes to a TAFKAL80ETC concert quality decreaces to 0 after concert", () => {
    const testItem = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 50);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(0);
    expect(testItem.sellIn).toBe(-1);
  });
});

describe("updateQuality", () => {
  it("conjured items reduces quality by 2 when sellin decreases", () => {
    const testItem = new Item("Conjured Mana Cake", 3, 6);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(4);
    expect(testItem.sellIn).toBe(2);
  });
});