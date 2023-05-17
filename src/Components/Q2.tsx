import React from 'react'
import { Flex } from '@chakra-ui/react';
import {useEffect,useState} from 'react';
import '../index.css'

interface Props {
    value: boolean;
  }
   

const Q2:React.FC<Props> = ({ value }) => {

    const [count, setCount] = useState(0);

  useEffect(() => {
    
    console.log('Count value changed:', count);
  }, [count]); 

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count-1);
  };

  return (
    <Flex height={'100vh'}  flexDir={value?'column':'row'} position='relative' color={'white'} fontWeight={'700'} fontSize={value?'1rem':'2rem'}>
        <Flex className='heading'>Question 2 </Flex>
        <Flex backgroundColor={'#C49BF8'} width={value?'calc(100% - 60px)':'calc(50% - 100px)'} height={value?'75%':""} padding={value?'0px 30px':'0px 50px'} justifyContent={'center'} textAlign={'center'} alignItems={'center'}> For this task , i have used useEffect hook  to update regarding the state value of count of this functional component.The output is printed at the console. </Flex>
        <Flex backgroundColor={'#7E92C0'} width={value?'100%':'50%'} flexDir={'column'} height={value?'25%':''} justifyContent={'center'} alignItems={'center'}>
            <div>Count: {count}</div>
            <button style={{margin:'10px 0px'}} onClick={increment}>Increment</button>
            <button style={{margin:'10px 0px'}} onClick={decrement}>Decrement</button>
        </Flex>
    </Flex>
  )
}

export default Q2