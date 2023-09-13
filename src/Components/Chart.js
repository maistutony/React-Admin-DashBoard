import React, { useEffect, useRef, useState } from "react";
import { Card, Col, Row,Dropdown } from "react-bootstrap";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
} from "recharts";
import { useGetList} from "react-admin";
import PieCharts from "./PieCharts";
import BarChartAnalysis from "./BarChartAnalysis";
import SalaryDistribution from "./SalaryDistribution";

const Chart = (props) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const [partialState, setPartialState] = useState(null);
  const [xAxisData, setXAxisData] = useState("Age");
    const [yAxisData, setYAxisData] = useState("productivity");
  const { data } = useGetList("Dashboard");
  // State to store the current width of the column
  const [columnWidth, setColumnWidth] = useState(null);

  // Function to update the column width when the component mounts or the window is resized
  const updateColumnWidth = () => {
    if (columnRef.current) {
      setColumnWidth(columnRef.current.offsetWidth);
    }
  };
  const handlePartial = (e) => {
    e.preventDefault()
    setStart(e.target.getAttribute("start"))
    setEnd(e.target.getAttribute("end"));
  }
  const handleGrids = (e) => {
    e.preventDefault();
    setXAxisData(e.target.getAttribute("xaxis"))
    setYAxisData(e.target.getAttribute("yaxis"));
  }
  // Attach the event listener to window resize
  useEffect(() => {
    window.addEventListener("resize", updateColumnWidth);
    // Initial measurement when the component mounts
    updateColumnWidth();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateColumnWidth);
    };
  }, []);
  useEffect(() => {
    if (data) {
      submitPieces(data, [start, end]);
    }
    function submitPieces(data, [start, end]) {
    const sorted= data.slice(start, end).sort((a,b) =>b[xAxisData]-a[xAxisData] );
    setPartialState(sorted);
      return;
    }
  }, [start, end, data]);
  const columnRef = useRef(null);

  return (
    <Row {...props}>
      <Col md={4}>
        <Card>
          <h3>Total employees {data && data.length}</h3>
          {data && <PieCharts data={data} />}
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <h3>Productivity Against Age</h3>
          {data && <BarChartAnalysis fullData={data} />}
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <h3>Salary Distibution</h3>
          {data && <SalaryDistribution fullData={data} />}
        </Card>
      </Col>
      <Col md={4}></Col>
      <Row>
        <Col className="col-md-9" ref={columnRef}>
          <h2>Graphical Employee Perfomance</h2>
          <LineChart
            className=""
            width={columnWidth - 40}
            height={400}
            data={partialState}
          >
            <XAxis dataKey={xAxisData} />
            <YAxis
              label={{
                angle: -90,
                position: "insideLeft",
                offset: -10,
              }}
            />
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />
            <Line
              type="monotone"
              dataKey={yAxisData}
              stroke="#8884d8"
              yAxisId={0}
            />
            {/* <Line
                  type="monotone"
                  dataKey="productivity"
                  stroke="#387908"
                  yAxisId={1}
                /> */}
          </LineChart>
        </Col>
        <Col className="col-md-3">
          <Row className="my-5">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Filter By number
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={handlePartial} start="0" end="10">
                  Top 10
                </Dropdown.Item>
                <Dropdown.Item onClick={handlePartial} start="0" end="30">
                  Top 30
                </Dropdown.Item>
                <Dropdown.Item onClick={handlePartial} start="0" end="50">
                  Top 50
                </Dropdown.Item>
                <Dropdown.Item onClick={handlePartial} start="0" end="200">
                  All List
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Row>
          <Row>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Change Grids
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={handleGrids}
                  xaxis="Satisfaction Rate"
                  yaxis="Salary"
                >
                  Salary against Satisfaction Rate
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={handleGrids}
                  xaxis="Department"
                  yaxis="productivity"
                >
                  Departments against productivity
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={handleGrids}
                  xaxis="Age"
                  yaxis="productivity"
                >
                  Age against productivity
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={handleGrids}
                  xaxis="Salary"
                  yaxis="productivity"
                >
                  Salary against productivity
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Row>
        </Col>
        {/* Add more charts or components here */}
      </Row>
    </Row>
  );
};

export default Chart;
