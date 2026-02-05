import {
  ifDevice,
  map,
  rule,
  withCondition,
  writeToProfile,
} from "karabiner.ts";

const Unused = rule("Unused").manipulators([
  withCondition(ifDevice({ product_id: 864, vendor_id: 10730 }))([
    map("home").to("japanese_kana"),
    map("page_up").to("japanese_eisuu"),
  ]),
]);

const SwapLeftCtrlOpt = rule("SwapLeftCtrlOpt").manipulators([
  withCondition(ifDevice({ product_id: 864, vendor_id: 10730 }))([
    map("left_control").to("left_option"),
    map("left_option").to("left_control"),
  ]),
]);

const RealProgrammerQWERTYFirstLayer = rule(
  "RealProgrammerQWERTY - First Layer (Symbols)",
).manipulators([
  withCondition(ifDevice([{ product_id: 864, vendor_id: 10730 }]))([
    map("1").to("8", "shift"),
    map("2").to("["),
    map("3").to("[", "shift"),
    map("4").to("9", "shift"),
    map("5").to("3", "shift"),
    map("6").to("6", "shift"),
    map("7").to("0", "shift"),
    map("8").to("]", "shift"),
    map("9").to("]"),
    map("0").to("4", "shift"),
    map("caps_lock").to("5", "shift"),
    map("[").to("7", "shift"),
    map("]").to("1", "shift"),
  ]),
]);

const RealProgrammerQWERTYSecondLayer = rule(
  "RealProgrammerQWERTY - Second Layer (Numbers with Shift)",
).manipulators([
  withCondition(
    ifDevice([
      { product_id: 864, vendor_id: 10730 },
      // { product_id: 17, vendor_id: 12901 },
    ]),
  )([
    map("0", "shift").to("0"),
    map("1", "shift").to("1"),
    map("2", "shift").to("2"),
    map("3", "shift").to("3"),
    map("4", "shift").to("4"),
    map("5", "shift").to("5"),
    map("6", "shift").to("6"),
    map("7", "shift").to("7"),
    map("8", "shift").to("8"),
    map("9", "shift").to("9"),
    map("caps_lock", "shift").to("2", "shift"),
  ]),
]);

writeToProfile("Real Programmer QWERTY profile", [
  Unused,
  SwapLeftCtrlOpt,
  RealProgrammerQWERTYFirstLayer,
  RealProgrammerQWERTYSecondLayer,
]);
