import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function SearchHeader() {
  const [text, setText] = useState("");
  const {keyword} =useParams();

  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    navigate(`/videos/${text}`);
  }

  useEffect(()=>{
    setText(keyword || '');
  },[keyword])

  return (
    <header>
      <Link to ='/'>
        <img src="/favicon.ico" alt="Youtube" />
        <h1>Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="검색어를 입력하세요."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button>
          <img src="/images/buttonImage.png" alt="button" />
        </button>
      </form>
    </header>
  );
}
