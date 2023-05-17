import React from 'react'
import { Flex } from '@chakra-ui/react';
import '../index.css'

   
interface Props {
    value: boolean;
  }
   

const Q1:React.FC<Props> = ({ value }) => {
    
    interface FunctionComponentProps {
        message: string;
      }
      
    class ClassComponent extends React.Component<{ message: string }> 
    {
        render() 
        {
          return <div>{this.props.message}</div>;
        }
    }

    const FunctionComponent: React.FC<FunctionComponentProps> = ({ message }) => {

        return(
            <div>{message}</div>
        )

    }

return (
    <Flex height={'100vh'}  flexDir={value?'column':'row'} position='relative' justifyContent={'center'} color={'white'} fontWeight={'700'} fontSize={value?'1rem':'2rem'} textAlign={'center'}>
        <Flex className='heading'>Question 1</Flex>
        <Flex width={value?'100%':'50%'} backgroundColor={'#ED806E'} height={value?'50%':''}  justifyContent={'center'} alignItems={'center'}>
            <ClassComponent message={"This is from Class Component."}/>
        </Flex>
        <Flex  width={value?'100%':'50%'} backgroundColor={'#96BEA4'} height={value?'50%':''} justifyContent={'center'} alignItems={'center'}>
            <FunctionComponent message={"This is from Functional Component."}/>
        </Flex>

    </Flex>
  )
}

export default Q1