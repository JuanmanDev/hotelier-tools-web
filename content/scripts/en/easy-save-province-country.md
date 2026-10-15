---
title: "Easy Save Province and Country"
description: "Spanish province and country picker for Little Hotelier guest forms: one tap sets the province and Spain, fills empty guest names and opens each guest form."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/easySaveProvinceCountry.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/easy-save-province-country/from.webp"
  after: "/images/scripts/easy-save-province-country/to.webp"
  gallery:
    - "/images/scripts/easy-save-province-country/from.webp"
    - "/images/scripts/easy-save-province-country/to.webp"
    - "/images/scripts/easy-save-province-country/three.webp"
---

This script makes it faster to complete guest details in a Little Hotelier reservation, especially for Spanish guests. When you click the province field, it shows a list of Spanish provinces to tap, and picking one also sets the country to Spain. It is built for front desk staff at properties in Spain and is designed to be easy to use on a tablet.

## The problem it solves

For Spanish guests, Little Hotelier needs a province as well as the country, and reports such as the INE occupancy survey group guests by province of residence. Typing province names by hand leads to spelling variants (Vizcaya or Bizkaia, Orense or Ourense), the country list is long to scroll, and an additional guest's form will not save while its name fields are empty.

## What changes

On the reservation edit screen in Front Desk:

- **Province picker:** focusing the province field opens a grid with the 50 Spanish provinces plus Ceuta and Melilla. Typing filters it, and common alternatives such as Gerona, Lérida, Seville, Mallorca or Tenerife find the right province.
- **Country set for you:** choosing a province sets the guest's country to Spain.
- **Country picker:** the country field opens a searchable grid showing each country in Spanish, with the English name below.
- **Empty names filled:** when you pick a province or country, empty first and last name fields on that guest form get the main guest's name, or an underscore "_" if that is empty too, so the form can be saved.
- **Guest forms opened:** collapsed guest forms are expanded automatically and the cursor goes to the province field.
- **Touch-friendly buttons:** the add-guest button and the expand arrows are larger, and the red cross to remove a guest is always visible.

## How to install

You need the free Tampermonkey extension. Press **Install on Tampermonkey**, confirm, and reload the reservation. The [installation guide](/tools/ui/instructions) shows every step. The script runs only on reservation edit pages (app.littlehotelier.com/extranet/properties/.../reservations/.../edit). It is free and open source: [read the code on GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/easySaveProvinceCountry.user.js).

## Good to know

- The province picker only appears when the guest's country is empty or Spain. For other countries the field works as normal.
- The search box and country names are in Spanish, whatever language Little Hotelier uses.
- Filled name fields copy the main guest's name. Correct them if the additional guest has a different name.
- Changes are made in the form only. Nothing is saved until you press Save, and the script stores nothing.

## Related

- [SES Hospedajes with Little Hotelier](/blog/ses-hospedajes-little-hotelier)
- [How to fill in the INE hotel occupancy survey](/blog/ine-hotel-occupancy-survey)
- [Chekin Connection](/tools/ui/show-chekin)
