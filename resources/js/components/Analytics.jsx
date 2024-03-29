
import {
	LineChart,
	ResponsiveContainer,
	Legend,
	Tooltip,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
} from "recharts";

// Sample chart data
const pdata = [
	{
		name: "MongoDb",
		student: 11,
		fees: 120,
	},
	{
		name: "Javascript",
		student: 15,
		fees: 12,
	},
	{
		name: "PHP",
		student: 5,
		fees: 10,
	},
	{
		name: "Java",
		student: 10,
		fees: 5,
	},
	{
		name: "C#",
		student: 9,
		fees: 4,
	},
	{
		name: "C++",
		student: 10,
		fees: 8,
	},
];

function Analytics() {
	return (
        
		<>
			<h1 className="text-heading">Recived Payments Analytics</h1>
			
		</>
	);
}

export default Analytics;
