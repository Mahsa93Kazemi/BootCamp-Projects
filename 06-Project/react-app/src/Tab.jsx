import { useState, useEffect } from "react";
import "./Tab.css";

function App() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const savedTab = localStorage.getItem("activeTab");
    if (savedTab) {
      setActiveTab(parseInt(savedTab, 10));
    }
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
    localStorage.setItem("activeTab", index);
  };

  return (
    <>
      <div className="container">
        <div className="App">
          <h1>Tabs Component with React</h1>
          <div className="tabs">
            <div
              className={`tab ${activeTab === 0 ? "active" : ""}`}
              onClick={() => handleTabClick(0)}
            >
              Tab 1
            </div>
            <div
              className={`tab ${activeTab === 1 ? "active" : ""}`}
              onClick={() => handleTabClick(1)}
            >
              Tab 2
            </div>
            <div
              className={`tab ${activeTab === 2 ? "active" : ""}`}
              onClick={() => handleTabClick(2)}
            >
              Tab 3
            </div>
            <div
              className={`tab ${activeTab === 3 ? "active" : ""}`}
              onClick={() => handleTabClick(3)}
            >
              Tab 4
            </div>
          </div>
        </div>
        <div className="content">
          {activeTab === 0 && <div>Content for Tab 1</div>}
          {activeTab === 1 && <div>Content for Tab 2</div>}
          {activeTab === 2 && <div>Content for Tab 3</div>}
          {activeTab === 3 && <div>Content for Tab 4</div>}
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quas
            quisquam cupiditate soluta optio. Illo deleniti dignissimos eum,
            eius iusto temporibus officiis vero. Est ea eius, culpa fuga nisi
            fugit recusandae nostrum cum rem voluptatem, distinctio nesciunt
            dolores hic perferendis?
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
