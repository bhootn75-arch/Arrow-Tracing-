# बच्चों के लिए स्मार्ट एरो ट्रेसिंग ऐप

उंगली से एरो के साथ अक्षर/वर्ण/शब्द लिखना सिखाने वाला ऑफ़लाइन-सक्षम वेब ऐप।

## GitHub Pages पर पब्लिश कैसे करें

1. GitHub पर नया repository बनाएँ (उदा. `smart-arrow-tracing`).
2. इस पूरे फ़ोल्डर की फ़ाइलें अपलोड करें (`index.html`, `manifest.json`, `sw.js`, `icons/`).
3. **Settings → Pages → Source**: `Deploy from a branch` → branch `main` → folder `/ (root)` → Save.
4. कुछ मिनट बाद URL मिलेगा:
   `https://<username>.github.io/<repo-name>/`

## Chrome से “ऐप जैसा” इंस्टॉल

1. ऊपर वाला GitHub Pages URL Chrome (Android/Desktop) में खोलें।
2. मेनू → **Install app** / **Add to Home screen** (या address bar में Install आइकन)।
3. होम स्क्रीन पर ऐप आइकन लग जाएगा — बिना ब्राउज़र बार के खुलता है।

> नोट: Install विकल्प HTTPS पर ही दिखता है (GitHub Pages HTTPS देता है)।

## लोकल / ऑफ़लाइन

- `index.html` डबल-क्लिक करके भी चलता है (कुछ ब्राउज़र में सीमित)।
- सर्विस वर्कर + मैनिफेस्ट से GitHub Pages पर ऑफ़लाइन भी चल सकता है।

## फ़ाइलें

| फ़ाइल | विवरण |
|--------|--------|
| `index.html` | पूरा ऐप (लॉजिक वही, कोई बदलाव नहीं) |
| `manifest.json` | PWA नाम, आइकन, standalone मोड |
| `sw.js` | ऑफ़लाइन कैश |
| `icons/` | ऐप आइकन |

**महत्वपूर्ण:** ट्रेसिंग / एरो / चींटी / एडिट / शब्द-मोड आदि का फंक्शन लॉजिक मूल जैसा ही है। केवल PWA (इंस्टॉल + ऑफ़लाइन) के लिए हेड टैग और छोटा SW रजिस्टर जोड़ा गया है।
