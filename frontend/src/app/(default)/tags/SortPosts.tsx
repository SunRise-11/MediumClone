"use client";
import { useState } from "react";
import { Select, Space } from 'antd';
const SortPosts = () => {
  const [trending, setTrending] = useState(false);
  const [latest, setLatest] = useState(false);
  const [best, setBest] = useState(true);
  const handleChange = (value : string) => {
    console.log(`selected ${value}`); 
  };
  return (
    <div className="flex items-center space-x-8 border-b text-gray-600 border-gray-200 mt-8">
      <p
        className={`py-4 px-2 border-gray-950 cursor-pointer ${trending ? "border-b" : ""
          }`}
        onClick={() => {
          setTrending(true);
          setLatest(false);
          setBest(false);
        }}
      >
        Trending
      </p>
      <p
        className={`py-4 px-2 border-gray-950 cursor-pointer ${latest ? "border-b" : ""
          }`}
        onClick={() => {
          setTrending(false);
          setLatest(true);
          setBest(false);
        }}
      >
        Latest
      </p>
      <p
        className={`py-4 px-2 border-gray-950 cursor-pointer ${best ? "border-b" : ""
          }`}
        onClick={() => {
          setTrending(false);
          setLatest(false);
          setBest(true)
        }}
      >
        Best
      </p>

      {
        best && <Space wrap>
          <Select
            defaultValue="This Year"
            style={{
              width: 120,
            }}
            bordered={false}
            onChange={handleChange}
            options={[
              {
                value: 'Year',
                label: 'This Year',
              },
              {
                value: 'Month',
                label: 'Month',
              },
              {
                value: 'Week',
                label: 'Week',
              },
              {
                value: 'All Time',
                label: 'All Time',
              },
            ]}
          />
        </Space>
      }
    </div>
  );
};

export default SortPosts;