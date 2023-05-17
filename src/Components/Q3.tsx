import React, { useState, useEffect, useCallback,useContext} from 'react';
import { Flex } from '@chakra-ui/react';
import { MyContext } from '../App';


interface Props {
    value: boolean;
  }

interface Person {
    name: string;
    age: number;
  }


const Q3:React.FC<Props> = ({ value }) => {


    const [count, setCount] = useState(0);
    const [person, setPerson] = useState<Person>({ name: 'John Doe', age: 25 });

    useEffect(() => {
        
        console.log('useEffect - Component did mount or update');
    }, [count]);
      
    const increment = useCallback(() => {
        setCount(prevCount => prevCount + 1);
      }, []);
    
      const changeName = useCallback(() => {
        var x =prompt("Enter Name");
        var y= parseInt(prompt("Enter Age")!);
        setPerson(prevPerson => ({ ...prevPerson, name: x!,age:y!}));
      }, []);
    
    const context_data = useContext(MyContext);
    console.log("hello")
    console.log(context_data)

    return(
        <Flex height={'100vh'}  flexDir={value?'column':'row'} position='relative' color={'white'}  fontWeight={'700'} fontSize={value?'1rem':'2rem'}>
            <Flex className='heading'>Question 3</Flex>
            <Flex backgroundColor={'#B97B91'} width={value?'calc(100% - 60px)':'calc(50% - 100px)'} height={value?'45%':""}  padding={value?'0px 30px':'0px 50px'} justifyContent={'center'} textAlign={'center'} alignItems={'center'}>In this task I have used useState, useEffect, useCallback which are major hooks of react.</Flex>
            <Flex width={value?'100%':'50%'} backgroundColor={'#637C6C'} height={value?'55%':""}  flexDir={'column'} justifyContent={'center'} textAlign={'center'} alignItems={'center'}>
                <div style={{marginBottom:'30px'}}>Count: {count}</div>
                <button onClick={increment}>Increment</button>
                <div>Name: {person.name}</div>
                <div >Age: {person.age}</div>
                <button style={{marginTop:'30px'}} onClick={changeName}>Change Name and Age</button>
                <p>Context Value: {context_data}</p>
            </Flex>
        </Flex>
    )
}

export default Q3