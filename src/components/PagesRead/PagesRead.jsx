import { useLoaderData } from "react-router-dom";
import { getLocalItem } from "../../LocalStorage";
import {
    Bar,
    BarChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Cell,
    LabelList,
} from "recharts";
import { useEffect, useRef, useState } from "react";

// Triangle shape
const getPath = (x, y, width, height) =>
    `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width},${y + height}
   Z`;

export function TriangleBar(props) {
    const { fill, x, y, width, height } = props;

    if ([x, y, width, height].some(v => v == null)) return null;

    return (
        <path
            d={getPath(Number(x), Number(y), Number(width), Number(height))}
            fill={fill}
        />
    );
}

const colors = ['#0084FF', '#00C49F', '#FFBB28', '#FF8042', '#FF0000'];

const PagesRead = () => {
    const books = useLoaderData();
    const localBooks = getLocalItem('Read') || [];

    const loadedBooks = books.filter(book =>
        localBooks.includes(book.bookId)
    );

    const containerRef = useRef(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const observer = new ResizeObserver(entries => {
            if (!entries || !entries[0]) return;
            setWidth(entries[0].contentRect.width);
        });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="bg-[#13131308] my-20 p-4 md:p-10 lg:p-16">
            <div
                ref={containerRef}
                className="w-full bg-slate-50 p-4 rounded-xl shadow-sm border border-slate-100"
            >

                {width > 0 && (
                    <BarChart
                        width={width}
                        height={500}
                        data={loadedBooks}
                        margin={{
                            top: 30,
                            right: 20,
                            left: 0,
                            bottom: 80,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />

                        <XAxis
                            dataKey="bookName"
                            interval={0}
                            angle={-15}
                            textAnchor="end"
                            height={70}
                        />

                        <YAxis />

                        <Bar dataKey="totalPages" shape={<TriangleBar />}>
                            {loadedBooks.map((_, index) => (
                                <Cell
                                    key={index}
                                    fill={colors[index % colors.length]}
                                />
                            ))}
                            <LabelList dataKey="totalPages" position="top" />
                        </Bar>
                    </BarChart>
                )}

            </div>
        </div>
    );
};

export default PagesRead;