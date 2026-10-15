---
title: "Change Inventory Name"
description: "Renames the Inventory menu in Little Hotelier to Inventory - Prices, in English and Spanish, so new front desk staff know where to find and change room rates."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/changeInventoryName.user.js"
category: "General"
images:
  before: "/images/scripts/change-inventory-name/from.png"
  after: "/images/scripts/change-inventory-name/to.png"
  gallery:
    - "/images/scripts/change-inventory-name/from.png"
    - "/images/scripts/change-inventory-name/to.png"
---

This small script renames the **Inventory** item in Little Hotelier's top menu to **Inventory - Prices** (or **Inventario - Precios** in Spanish). It is for owners who train new front desk staff: the label tells people that rates are set on that screen, not only room availability.

## The problem it solves

In Little Hotelier, room rates are edited on the Inventory screen. For someone new to the system, "Inventory" sounds like stock or room counts, so people look for a "Prices" or "Rates" menu that isn't there. A clearer label saves the same question being asked again at every shift change.

## What changes

- In the horizontal navigation menu of the newer Little Hotelier screens, the item labeled "Inventory" becomes "Inventory - Prices".
- If the menu is in Spanish, "Inventario" becomes "Inventario - Precios".
- The suffix follows the language of the page: Spanish pages get "Precios", any other language gets "Prices".
- Only the visible label changes. The link still goes to the same Inventory screen.
- Because the menu loads in stages, the script tries three times in the first few seconds after the page loads, and it never adds the suffix twice.

## How to install

You need the free Tampermonkey extension. Press **Install on Tampermonkey** on this page, confirm, and reload Little Hotelier. The [installation guide](/tools/ui/instructions) shows each step. The script runs only on application.littlehotelier.com, the address used by the newer Little Hotelier screens such as the calendar. It is free and open source: [see the code on GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/changeInventoryName.user.js).

## Good to know

- It only recognizes the menu item when it reads exactly "Inventory" or "Inventario". If Little Hotelier is set to another language, such as French or German, the label stays as it is.
- It changes the top navigation menu only. Pages on app.littlehotelier.com and Direct Booking are not matched, so their menus are unchanged.
- It works the same on desktop and touch screens.
- It stores nothing and sends nothing anywhere.
- If Little Hotelier renames or redesigns the menu, the label may stop changing until the script is updated.

## Related

- [Prices Display](/tools/ui/prices-display) shows your Inventory prices on the calendar
- [Dynamic pricing for small hotels on Little Hotelier](/blog/dynamic-pricing-little-hotelier)
- [Little Hotelier tips and hidden features](/blog/little-hotelier-tips)
