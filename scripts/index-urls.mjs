import { google } from "googleapis";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

// ── Credentials ──────────────────────────────────────────────────────────────
const credentials = {
  type: "service_account",
  project_id: "rapid-league-484617-a7",
  private_key_id: "720c4ddea556eac9d93135fc84c9fea1dc562efe",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC7Xj3DbFbNB5yc\nzja4wotktGJblZ1MqHLQaeQQGNDQWD9g6Ovpfxe1+cU8HlN4A7sO9pHpmt7K5Npk\nfWzL73mXSuSZYzbyMZnl7iN+XLN9FcwM8l8ZdYJkCFjq8QW2vulFdihrV/Vj74tP\n89e97dOMlQPzXLkV4xRLzTWJc89NhOJxUoh4Ixc/iy99mvyenQZQUSJfcIDBmyKi\nHgny62N2/3y/uqMiJdg1koJhj6Ttqisen98pPdhYx6NgzgTXGgsgucTl+Dvdmq7u\nqtrLKMrKTKB3qCQ1zRfDglqJwNutATOmK0cr0jk+/PGLZp2WAmdSLfKdUCcNJpmN\nRn0F/FuvAgMBAAECggEAMi47PGt3k9HGD/jqjvELhB0LepvHVRCIL2ksu2LqCeKY\nlsvK4u4223XZbRByKmJVZtyCl53yrUQ9eUxeJwAsAGj+cFYyEQtXvEzbFKyfJZEA\n5TbEYX0nPsM9jS6f6SGYOBI9IQKdpfYxyWf1D9jyH2SJelQK/eGjPennvLhXfNr0\nEHkaWClcglbDKFWSM+qo8hm0dj3yQNYeyt7Cy6TmWhBi8szkcztb8DspZPTYhwEG\n4yyeAOOarVlH2uUPMRPgH4yq6yXmTkPKim+zyTJyFhvcw+diMMSb9usYNi/gyWzI\nUlzUeB210UislWHWM74+yFGAUkdo/zR5YESw98CKAQKBgQDzlyEa6NwegZmkgb+8\nNyKRTk7jsfFMz6TdWKp7wZqn9hmj4kbyswY75CVTlQmcv8+m025TsW4ypVZQIkDT\nOni3N+s1Xm2ZUY9OETWroD1ObhHXgfAvx+H8VDzedczjb+cCrGdqTJ3vdKWvgQyi\nr47zFT7sb4fRv1pmKy/kM6r7MQKBgQDE6d6o0MxjN/Ht8XYNKL/P1WXLoVOsYOvG\nUpaYE1UjIdIOBoa4Ih3BfLqE6I2JSi9CMMW2rTpb8bFsnr4NlZWkXrPN9PopXtuk\nzL1Rzx32DSY1Arn3WB3LdMTp+TtG+tzKipvbogf6sdwSsim8+jjXyeGYrRYcu7+1\nEHBsiMlM3wKBgBHNu/exiVUZd9dUPGVPSlGAfbeaq95HVu9uqZc+AUXBcQJPaYwX\nlZ8O/8NqIze3tT+mOGwZjcpZ10MoHcDShzws9B4EdtI76dN04o1WuuRemyM7Ngjn\n/RZqOcCwr3b4GNRTMYPNccWsqud28St61WHi7aRuSmkEKWFKSsfNFvQhAoGBAIhO\ns/j8AF+2PFxPxz44tP5zY/HfjQJIXS19wg0nZMnbAYL/9YXE6AAmDR8vs7oThj81\nb8eShlFbL0xXXowcved4PtMU/45fwX+E0pCs5LqMQ6RybLTRZF6QSDcGdYge43O5\nG0agFRHuyL6QYeAU/gAyGV4MgsAFHyGBbbFTxrTVAoGBAKRA7FEe8glMMD2+ooEw\nUR1IfkOxKtFpFjngJOh+B79eiW8k0wseVyi+akMaHHjX/DUVrQNHgeWinqD3ktAN\n5TSYmKbl+zym7NCHIcBRSSXLrAEPvqDyGhC4+7MlWE00VPjHNrcpSPEyGP8BsA0H\nSiIFOOVvoQ2iIuCxC5M43uww\n-----END PRIVATE KEY-----\n",
  client_email: "albert@rapid-league-484617-a7.iam.gserviceaccount.com",
  client_id: "113484944820634353484",
  token_uri: "https://oauth2.googleapis.com/token",
};

// ── All URLs to index ─────────────────────────────────────────────────────────
const BASE = "https://albertconstructionltd.co.uk";

const urls = [
  // Core
  `${BASE}/`,
  `${BASE}/about`,
  `${BASE}/contact`,
  `${BASE}/gallery`,
  `${BASE}/services`,
  `${BASE}/locations`,
  `${BASE}/guides`,
  // Services
  `${BASE}/services/loft-conversions`,
  `${BASE}/services/extensions`,
  `${BASE}/services/general-renovations`,
  `${BASE}/services/commercial-offices`,
  `${BASE}/services/bathroom-renovations`,
  `${BASE}/services/kitchen-fitting`,
  `${BASE}/services/plastering`,
  `${BASE}/services/painting-decorating`,
  `${BASE}/services/roofing`,
  // Loft sub-pages
  `${BASE}/services/loft-conversions/dormer`,
  `${BASE}/services/loft-conversions/hip-to-gable`,
  `${BASE}/services/loft-conversions/mansard`,
  // Guides
  `${BASE}/guides/loft-conversion-cost-london`,
  `${BASE}/guides/house-extension-cost-london`,
  `${BASE}/guides/planning-permission-loft-conversion-london`,
  `${BASE}/guides/party-wall-agreement-london`,
  `${BASE}/guides/bathroom-renovation-cost-london`,
  // Locations
  `${BASE}/locations/barnet`,
  `${BASE}/locations/finchley`,
  `${BASE}/locations/enfield`,
  `${BASE}/locations/wood-green`,
  `${BASE}/locations/islington`,
  `${BASE}/locations/edgware`,
  `${BASE}/locations/stanmore`,
  `${BASE}/locations/harrow`,
  `${BASE}/locations/wembley`,
  `${BASE}/locations/ealing`,
  `${BASE}/locations/acton`,
  `${BASE}/locations/hammersmith`,
  `${BASE}/locations/hackney`,
  `${BASE}/locations/stratford`,
  `${BASE}/locations/ilford`,
  `${BASE}/locations/brixton`,
  `${BASE}/locations/croydon`,
  `${BASE}/locations/lewisham`,
  `${BASE}/locations/camden`,
  `${BASE}/locations/watford`,
  `${BASE}/locations/st-albans`,
];

// ── Auth & submit ─────────────────────────────────────────────────────────────
async function main() {
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/indexing"],
  });

  const client = await auth.getClient();
  const indexing = google.indexing({ version: "v3", auth: client });

  console.log(`\nSubmitting ${urls.length} URLs to Google Indexing API...\n`);

  let success = 0;
  let failed = 0;

  for (const url of urls) {
    try {
      await indexing.urlNotifications.publish({
        requestBody: {
          url,
          type: "URL_UPDATED",
        },
      });
      console.log(`✓ ${url}`);
      success++;
    } catch (err) {
      console.error(`✗ ${url} — ${err.message}`);
      failed++;
    }

    // Small delay to avoid rate limiting (600 requests/day limit)
    await new Promise((r) => setTimeout(r, 200));
  }

  console.log(`\nDone. ${success} submitted, ${failed} failed.`);
}

main();
