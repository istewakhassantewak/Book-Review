import { useLoaderData } from "react-router-dom";
import { getLocalItem } from "../../LocalStorage";
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Cell, LabelList } from 'recharts';

// Custom shape function for the curved triangle bar
const getPath = (x, y, width, height) =>
    `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
   Z`;

export function TriangleBar(props) {
    const { fill, x, y, width, height } = props;

    if (x == null || y == null || width == null || height == null) {
        return null;
    }

    return <path d={getPath(Number(x), Number(y), Number(width), Number(height))} stroke="none" fill={fill} />;
}

// Color palette matching the reference image from left to right
const colors = ['#0084FF', '#00C49F', '#FFBB28', '#FF8042', '#FF0000'];

const PagesRead = () => {
    const books = useLoaderData();
    const localBooks = getLocalItem('Read') || [];

    const loadedBooks = books.filter(book => {
        return localBooks.find(localId => localId === book.bookId);
    });

    return (
        /* Styled with Tailwind CSS: background, padding, rounding, and sizing */
        <div className="bg-[#13131308] my-20 p-24">
            <div className="w-full overflow-x-auto bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-100">

                <BarChart
                    width={1000}
                    height={500}
                    data={loadedBooks}
                    margin={{ top: 30, right: 30, left: 10, bottom: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />

                    <XAxis
                        dataKey="bookName"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#64748B', fontSize: 13, fontWeight: 500 }}
                        dy={12}
                    />

                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#64748B', fontSize: 13 }}
                    />

                    <Bar
                        dataKey="totalPages"
                        shape={TriangleBar}
                    >
                        {loadedBooks.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}

                        <LabelList
                            dataKey="totalPages"
                            position="top"
                        />
                    </Bar>
                </BarChart>

            </div>
        </div >
    );
};

export default PagesRead;