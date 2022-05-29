import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";
import { useSelector } from 'react-redux';

const PortfolioDiagram = () => {

    const arrayDiagramOne = useSelector(state => state.currencyPortfel);
    const arrayDiagramTwo = useSelector(state => state.cryptoCurrencyPortfel);

    const data = [
        { name: "Ethereum", users: arrayDiagramTwo[0].quantity },
        { name: "Bitcoin", users: arrayDiagramTwo[1].quantity },
        { name: "Dollars", users: arrayDiagramOne[0].quantity },
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

