import { useTheme } from "./theme.js";
import { Card, Btn } from "./components.jsx";

function UploadPage() {
  const { t } = useTheme();

  return (
    <div style={{ maxWidth: 860 }}>
      <div className="fade-up" style={{ marginBottom: 16 }}>
        <div className="serif" style={{ fontSize: 22, fontWeight: 700, color: t.text }}>
          Upload Documents
        </div>
        <div style={{ fontSize: 13, color: t.textMuted, marginTop: 3 }}>
          This page is a placeholder — wire it to your backend/storage.
        </div>
      </div>

      <Card className="fade-up s1" style={{ padding: 20 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <div style={{ color: t.textMuted, fontSize: 13 }}>
            Add file upload (drag & drop, validation, progress) here.
          </div>
          <Btn variant="accent">Choose files</Btn>
        </div>
      </Card>
    </div>
  );
}

export { UploadPage };

