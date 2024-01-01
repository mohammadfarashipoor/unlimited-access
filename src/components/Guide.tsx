import "../styles/Guide.css";
function Guide() {
  return (
    <div className="guide">
      <div className="user-message user-first">
        <p>Can you help me, please?</p>
      </div>
      <div className="admin-message admin-first">
        <p>Enter the website url and then press enter key</p>
      </div>
      <div className="user-message user-second">
        <p>The screen is white and I can't see anything</p>
      </div>
      <div className="admin-message admin-second">
        <p>click the Text-only version</p>
      </div>
    </div>
  );
}

export default Guide;
