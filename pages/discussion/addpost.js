import { useEffect, useState } from 'react';
import { Box,Text,Button,Textarea,Input, Divider,FormControl,FormLabel,
    FormErrorMessage,
    FormHelperText, } from '@chakra-ui/react';
import {
    Select,
  } from "chakra-react-select";
import Router from 'next/router'
export default function AddPost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const[isValid,setIsValid] = useState(false);
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState([]);
    useEffect(()=>{
        if (category!=''){
            console.log("category is: "+category);
            setIsValid(true);
        }
        console.log(subcategory);
    })
    const options = [
        { label: "Music Share", value: "music share" },
        { label: "Band Forming", value: "band forming" },
        { label: "Secondhand Instrument", value: "secondhand instrument"},
      ];
      const suboptions = [
        { label: "Rock", value: "rock" },
        { label: "Metal", value: "metal" },
        { label: "Pop", value: "pop"},
        { label: "Folk", value: "folk"},
        { label: "Hiphop", value: "hiphop"},
        { label: "Others", value: "others"},
      ];
    const formSubmit = (e) =>{
        handlePost(e);
        Router.push("/discussion/test");
    }
    const handlePost = async (e) => {
        e.preventDefault();

        // reset error and message
        setError('');
        setMessage('');
        
        let post = {
            title,
            content,
            createdAt: new Date().toISOString(),
            user:{//wait for login system fully implement to make it dynamic
                userId:1,
                userName:"tester1",
                },
            category,
            subcategory
        };
        // save the post
        let response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify(post),
        });

        // get the data
        let data = await response.json();

        if (data.success) {
            // reset the fields
            setTitle('');
            setContent('');
            // set the message
            return setMessage(data.message);
        } else {
            // set the error
            return setError(data.message);
        }
        
    };

    return (
        <>
            <Box>
                <form onSubmit={formSubmit} className={"form"}>
                    {error ? (
                        <Box className={"formItem"}>
                            <h3 className={"error"}>{error}</h3>
                        </Box>
                    ) : null}
                    {message ? (
                        <Box className={"formItem"}>
                            <h3 className={"message"}>{message}</h3>
                        </Box>
                    ) : null}
                    <FormControl className={"formItem"}>
                        <FormLabel>Title</FormLabel>
                        <Input
                            type="text"
                            name="title"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            placeholder="title"
                            required={true}
                        />
                        <Divider/>
                    </FormControl>
                    
                    <FormControl className={"formItem"}>
                        <FormLabel>Content</FormLabel>
                        <Textarea
                            name="content"
                            onChange={(e) => setContent(e.target.value)}
                            value={content}
                            placeholder="Post content"
                            required={true}
                        />
                    
                    </FormControl>
                    
                    <FormControl>
                    <FormLabel>Post Category</FormLabel>
                    <Select
                        name='category'
                        onChange={(e)=>setCategory(e.value)}
                        options={options}
                        value={options.value} 
                        labelledBy="Select"
                        required="true"
                    />
                    {!isValid &&<FormHelperText>You must choose a category!</FormHelperText>}
                    <FormLabel>Post SubCategory</FormLabel></FormControl>
                    {/* TODO: subcat should change its content according to selected content */}

                    <FormControl>
                    <Select
                        name='subcategory'
                        options={suboptions}
                        values={suboptions.values}
                        onChange={(e)=>{console.log(e);
                            //setSubcategory(e);
                            let arr=[];
                            for (let i=0;i<e.length;i++){
                                arr.push(e[i].value);
                            }
                            setSubcategory(arr);
                        ;}}
                        isMulti={true}
                        closeMenuOnSelect={false}
                    />
                    </FormControl>
                    <Box className={"formItem"}>
                        <Button type="submit" disabled={!isValid}>Add post</Button>
                    </Box>
                </form>
            </Box>
        </>
    );
}
