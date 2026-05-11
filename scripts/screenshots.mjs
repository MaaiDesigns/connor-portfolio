import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const sites = [
  { name: "maai", url: "https://maaidesigns.com" },
  { name: "bestcleaners", url: "https://bestcleanerssavannah.com" },
  { name: "kgas", url: "https://savkga.com" },
];

const desktop = { width: 1440, height: 900 };
const mobile = { width: 390, height: 844 };

async function shoot(browser, site, viewport, suffix) {
  const context = await browser.newContext({ viewport });
  const page = await context.newPage();
  try {
    await page.goto(site.url, { waitUntil: "networkidle", timeout: 30000 });
    await page.waitForTimeout(1500);
    const path = `public/screenshots/${site.name}-${suffix}.png`;
    await page.screenshot({ path, fullPage: false });
    console.log(`OK  ${path}`);
  } catch (e) {
    console.log(`FAIL ${site.name} ${suffix}: ${e.message}`);
  } finally {
    await context.close();
  }
}

(async () => {
  await mkdir("public/screenshots", { recursive: true });
  const browser = await chromium.launch();
  for (const s of sites) {
    await shoot(browser, s, desktop, "desktop");
    await shoot(browser, s, mobile, "mobile");
  }
  await browser.close();
})();
