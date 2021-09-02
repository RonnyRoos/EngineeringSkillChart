import React, {useEffect, useState} from 'react';
import {ResponsiveRadar} from '@nivo/radar';

type TasteData = {
    taste: string;
    chardonay?: number;
    carmenere?: number;
    syrah?: number;
}

const Radar = () => {
    const initialData: TasteData[] = [
        {
            taste: "social",
            chardonay: 1,
            carmenere: 5,
            syrah: 2
        },
        {
            taste: "bitter",
            chardonay: 9,
            carmenere: 3,
            syrah: 1
        },
        {
            taste: "heavy",
            chardonay: 5,
            carmenere: 4,
            syrah: 10
        },
        {
            taste: "strong",
            chardonay: 2,
            carmenere: 3,
            syrah: 4
        },
        {
            taste: "sunny",
            chardonay: 7,
            carmenere: 8,
            syrah: 6
        }
    ];
    const [tasteData, setTasteData] = useState(initialData);
    const [numClick, setNumClick] = useState(0);

    useEffect(() => {
        console.log('numClick', {numClick});
        console.log('tasteData', {tasteData});
    }, [tasteData, numClick]);

    const onClick = (): void => {
        setTasteData(tasteData => {
            console.log(tasteData);
            //const newTasteData = [...tasteData];
            const newTasteData = JSON.parse(JSON.stringify(tasteData));

            for (let key in newTasteData) {
                newTasteData[key].syrah = Math.floor(Math.random() * 10 + 1);
            }

            console.log(newTasteData);
            return newTasteData;
        });
    };


    return (
        <div style={{width: "600px", height: "600px"}}>
            <ResponsiveRadar
                data={tasteData}
                keys={['chardonay', 'carmenere', 'syrah']}
                indexBy="taste"
                maxValue="auto"
                margin={{top: 70, right: 80, bottom: 40, left: 80}}
                curve="linearClosed"
                borderWidth={2}
                borderColor={{from: 'color'}}
                gridLevels={5}
                gridShape="circular"
                gridLabelOffset={36}
                enableDots={true}
                dotSize={10}
                dotColor={{theme: 'background'}}
                dotBorderWidth={2}
                dotBorderColor={{from: 'color'}}
                enableDotLabel={true}
                dotLabel="value"
                dotLabelYOffset={-12}
                colors={{scheme: 'accent'}}
                fillOpacity={0.25}
                blendMode="multiply"
                animate={true}

                isInteractive={true}
                legends={[
                    {
                        anchor: 'top-left',
                        direction: 'column',
                        translateX: -50,
                        translateY: -40,
                        itemWidth: 80,
                        itemHeight: 20,
                        itemTextColor: '#999',
                        symbolSize: 12,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ]}
            />

            <div>Numclick {numClick}</div>
            <button onClick={() => setNumClick(numClick + 1)}>Change count</button>

            <p>
                <button onClick={onClick}>Testtest</button>
            </p>
            <pre>
                {JSON.stringify(tasteData, null, 2)}
            </pre>

        </div>
    )
}


export default Radar;