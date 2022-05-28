import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";
import { useSelector } from 'react-redux';

const PortfolioDiagram = () => {

    const arrayDiagramOne = useSelector(state => state.currencyPortfel);
    const arrayDiagramTwo = useSelector(state => state.cryptoCurrencyPortfel);

console.log(arrayDiagramOne,arrayDiagramTwo);
    const data = [
        { name: "Bitcoin", users: arrayDiagramTwo[0].amount },
        { name: "Ethereum", users: arrayDiagramTwo[1].amount },
        { name: "Dollars", users: arrayDiagramOne[0].amount },
    ];

    return (
        <section className='portfolio-diagram'>
            <PieChart width={450} height={500}>
                <Pie
                    dataKey="users"
                    isAnimationActive={true}
                    data={data}
                    cx={250}
                    cy={200}
                    outerRadius={150}
                    fill="#B91C1C"
                    label
                />
                <Tooltip />
            </PieChart>
        </section>
    );
};

export default PortfolioDiagram;

