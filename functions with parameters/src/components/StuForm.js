import React, { useRef } from 'react'

function StuForm() {

  let stuNameInputRef= useRef();
  let parentNameInputRef= useRef();

  let eng1InputRef= useRef();
  let sans1InputRef= useRef()
  let mathsA1InputRef= useRef();
  let mathsB1InputRef= useRef();
  let phy1InputRef= useRef();
  let chem1InputRef= useRef();

  let eng2InputRef= useRef();
  let sans2InputRef= useRef();
  let mathsA2InputRef= useRef();
  let mathsB2InputRef= useRef();
  let phy2InputRef= useRef();
  let chem2InputRef= useRef();
  let phyPracInputRef= useRef();
  let chemPracInputRef= useRef();

  let legendSpan1StuName= useRef();
  let legendSpan2StuName= useRef();

  let totMarks1ParaRef= useRef();
  let totMarks2ParaRef= useRef();
  let totMarks12ParaRef= useRef();

  let eng1SpanRef= useRef();
  let sans1SpanRef= useRef()
  let mathsA1SpanRef= useRef();
  let mathsB1SpanRef= useRef();
  let phy1SpanRef= useRef();
  let chem1SpanRef= useRef();

  let eng2SpanRef= useRef();
  let sans2SpanRef= useRef();
  let mathsA2SpanRef= useRef();
  let mathsB2SpanRef= useRef();
  let phy2SpanRef= useRef();
  let chem2SpanRef= useRef();
  let phyPracSpanRef= useRef();
  let chemPracSpanRef= useRef();

  let onFocusInput = (inputRef)=>{
    inputRef.current.style.backgroundColor= "lightskyblue";
  }

  let onChangeInput = (inputRef)=>{
    inputRef.current.style.fontSize="1rem";
  }

  let onBlurInput = (inputRef,spanRef)=>{
    inputRef.current.style.backgroundColor="";
    inputRef.current.style.fontSize="";
    
  }
  
  let inputMarks100= (inputRef,spanRef)=>{

    if(inputRef.current.value>0 && inputRef.current.value<99)
      {
        if(inputRef.current.value>=35)
            {
              spanRef.current.innerHTML="PASS";
              spanRef.current.style.backgroundColor="lightgreen";
              spanRef.current.style.letterSpacing="0.3rem";
              spanRef.current.style.border="1px solid black";
              spanRef.current.style.display="inline-block";
              spanRef.current.style.width="100px";
            }
        else
            {
            spanRef.current.innerHTML="FAIL";
            spanRef.current.style.backgroundColor="red";
            spanRef.current.style.letterSpacing="0.3rem";
            spanRef.current.style.border="1px solid black";
            spanRef.current.style.display="inline-block";
            spanRef.current.style.width="100px";
          }
        }
        
    else
        { 
            inputRef.current.value= "INVALID";
        }
      }

  let inputMarks75= (inputRef,spanRef)=>{
    
    if(inputRef.current.value>0 && inputRef.current.value<75)
      {
        if(inputRef.current.value>=26.25)
            {
              spanRef.current.innerHTML="PASS";
              spanRef.current.style.backgroundColor="lightgreen";
              spanRef.current.style.letterSpacing="0.3rem";
              spanRef.current.style.border="1px solid black";
              spanRef.current.style.display="inline-block";
              spanRef.current.style.width="100px";
            }
        else
            {
            spanRef.current.innerHTML="FAIL";
            spanRef.current.style.backgroundColor="red";
            spanRef.current.style.letterSpacing="0.3rem";
            spanRef.current.style.border="1px solid black";
            spanRef.current.style.display="inline-block";
            spanRef.current.style.width="100px";
          }
        }
        
    else
        {
          inputRef.current.value= "INVALID";
        } 
  }

  let inputMarks60= (inputRef,spanRef)=>{
    
    if(inputRef.current.value>0 && inputRef.current.value<60)
      {
        if(inputRef.current.value>=21)
            {
              spanRef.current.innerHTML="PASS";
              spanRef.current.style.backgroundColor="lightgreen";
              spanRef.current.style.letterSpacing="0.3rem";
              spanRef.current.style.border="1px solid black";
              spanRef.current.style.display="inline-block";
              spanRef.current.style.width="100px";
            }
        else
            {
            spanRef.current.innerHTML="FAIL";
            spanRef.current.style.backgroundColor="red";
            spanRef.current.style.letterSpacing="0.3rem";
            spanRef.current.style.border="1px solid black";
            spanRef.current.style.display="inline-block";
            spanRef.current.style.width="100px";
          }
      }
      
    else
        {
          inputRef.current.value= "INVALID";
        }

  }

  let inputMarks30= (inputRef,spanRef)=>{
    if(inputRef.current.value<0 || inputRef.current.value>30)
      {
        inputRef.current.value= "INVALID";
      }
      
      else if(inputRef.current.value>=10.5)
          {
            spanRef.current.innerHTML="PASS";
            spanRef.current.style.backgroundColor="lightgreen";
            spanRef.current.style.letterSpacing="0.3rem";
            spanRef.current.style.border="1px solid black";
            spanRef.current.style.display="inline-block";
            spanRef.current.style.width="100px";
          }
      else
          {
          spanRef.current.innerHTML="FAIL";
          spanRef.current.style.backgroundColor="red";
          spanRef.current.style.letterSpacing="0.3rem";
          spanRef.current.style.border="1px solid black";
          spanRef.current.style.display="inline-block";
          spanRef.current.style.width="100px";
        }
  
  }


  let inputParaStyle=(inputPara)=>{
    inputPara.current.style.backgroundColor="deeppink";
    inputPara.current.style.border="1px solid black";
    inputPara.current.style.borderRadius="10px";
    inputPara.current.style.boxShadow="10px10px 10px black";
    inputPara.current.style.fontFamily="cursive";
    inputPara.current.style.margin="0px";
    inputPara.current.style.padding="10px";
  };

  let tot1=()=>{
    let eng1Marks= Number(eng1InputRef.current.value);
    let sans1Marks= Number(sans1InputRef.current.value);
    let mathsA1Marks= Number(mathsA1InputRef.current.value);
    let mathsB1Marks= Number(mathsB1InputRef.current.value);
    let phy1Marks= Number(phy1InputRef.current.value);
    let chem1Marks= Number(chem1InputRef.current.value);

    let stuName= stuNameInputRef.current.value;

    let totMarks1= eng1Marks+sans1Marks+mathsA1Marks+mathsB1Marks+phy1Marks+chem1Marks;
    let perc1= (totMarks1/470)*100;

    if(eng1Marks<35 || sans1SpanRef<35 || mathsA1Marks<26.25 || mathsB1Marks<26.25 || phy1Marks<21 || chem1Marks<21)
      {
        totMarks1ParaRef.current.innerHTML=  `${stuName} got FAILED`;
      }
      else
      {
      totMarks1ParaRef.current.innerHTML= `${stuName} scored ${totMarks1}/470 with ${perc1.toFixed(2)}%`; 
    }
  };

  let tot2=()=>{
    let eng2Marks= Number(eng2InputRef.current.value);
    let sans2Marks= Number(sans2InputRef.current.value);
    let mathsA2Marks= Number(mathsA2InputRef.current.value);
    let mathsB2Marks= Number(mathsB2InputRef.current.value);
    let phy2Marks= Number(phy2InputRef.current.value);
    let chem2Marks= Number(chem2InputRef.current.value);
    let phyPracMarks= Number(phyPracInputRef.current.value);
    let chemPracMarks= Number(chemPracInputRef.current.value);

    let stuName= stuNameInputRef.current.value;

    let totMarks2= eng2Marks+sans2Marks+mathsA2Marks+mathsB2Marks+phy2Marks+chem2Marks+phyPracMarks+chemPracMarks;
    let perc2= (totMarks2/530)*100;

    if(eng2Marks<35 || sans2Marks<35 || mathsA2Marks<26.25 || mathsB2Marks<26.25 || phy2Marks<21 || chem2Marks<21 || phyPracMarks<10.5 || chemPracMarks<10.5)
      {
       totMarks2ParaRef.current.innerHTML= `${stuName} got FAILED`;
      }
    else
      {
      totMarks2ParaRef.current.innerHTML= `${stuName} scored ${totMarks2}/530 with ${perc2.toFixed(2)}%`;
      } 
  };

  let tot12=()=>{
    let eng1Marks= Number(eng1InputRef.current.value);
    let sans1Marks= Number(sans1InputRef.current.value);
    let mathsA1Marks= Number(mathsA1InputRef.current.value);
    let mathsB1Marks= Number(mathsB1InputRef.current.value);
    let phy1Marks= Number(phy1InputRef.current.value);
    let chem1Marks= Number(chem1InputRef.current.value);

    let stuName= stuNameInputRef.current.value;
    let parentName= parentNameInputRef.current.value;

    let totMarks1= eng1Marks+sans1Marks+mathsA1Marks+mathsB1Marks+phy1Marks+chem1Marks;
    let perc1= (totMarks1/470)*100;

    let eng2Marks= Number(eng2InputRef.current.value);
    let sans2Marks= Number(sans2InputRef.current.value);
    let mathsA2Marks= Number(mathsA2InputRef.current.value);
    let mathsB2Marks= Number(mathsB2InputRef.current.value);
    let phy2Marks= Number(phy2InputRef.current.value);
    let chem2Marks= Number(chem2InputRef.current.value);
    let phyPracMarks= Number(phyPracInputRef.current.value);
    let chemPracMarks= Number(chemPracInputRef.current.value);

    // let stuName= stuNameInputRef.current.value;

    let totMarks2= eng2Marks+sans2Marks+mathsA2Marks+mathsB2Marks+phy2Marks+chem2Marks+phyPracMarks+chemPracMarks;
    let perc2= (totMarks2/530)*100;

    let totMarks12= totMarks1+totMarks2;
    let perc12= (perc1+perc2)/2;

    if(totMarks2ParaRef.current.innerHTML=== `${stuName} got FAILED`)
    {
      totMarks12ParaRef.current.innerHTML= `${stuName} II Year Needs To Be Cleared`;
    }
    else if(totMarks1ParaRef.current.innerHTML=== `${stuName} got FAILED`)
    {
      totMarks12ParaRef.current.innerHTML= `${stuName} I Year Needs To Be Cleared`;
    }
    else if(totMarks1ParaRef.current.innerHTML=== `${stuName} got FAILED` && totMarks2ParaRef.current.innerHTML=== `${stuName} got FAILED`)
    {
      totMarks12ParaRef.current.innerHTML= `BETTER LUCK NEXT TIME ${stuName}`;
    }
    else 
    {
      totMarks12ParaRef.current.innerHTML= `${stuName} S/O ${parentName} Has Succussfully Completed INTERMEDIATE with ${totMarks12}/1000 and ${perc12.toFixed(2)}% `;
    }
  };

  return (
    <div>
      <form className='formFlex'>

        <div className='stuDetailsDiv'>
        <fieldset>
          <legend>Student Details</legend>
        <div>
          <label>Student Name</label>
          <input placeholder='Enter Your Full Name' maxLength="7" ref={stuNameInputRef}
          onFocus={()=>{
            onFocusInput(stuNameInputRef);
          }}
          onChange={()=>{
            onChangeInput(stuNameInputRef);
          }}
          onBlur={()=>{
            onBlurInput(stuNameInputRef);
            legendSpan1StuName.current.innerHTML= stuNameInputRef.current.value;
            legendSpan2StuName.current.innerHTML= stuNameInputRef.current.value;
            legendSpan1StuName.current.style.textShadow= "10px 10px 10px black";
            legendSpan2StuName.current.style.textShadow= "10px 10px 10px black";
          }}
          ></input>
        </div>

        <div>
          <label>Parent Name</label>
          <input maxLength={10} ref={parentNameInputRef}
          onFocus={()=>{
            onFocusInput(parentNameInputRef);
          }}
          onChange={()=>{
            onChangeInput(parentNameInputRef);
          }}
          onBlur={()=>{
            onBlurInput(parentNameInputRef);
          }}
          ></input>
        </div>

        </fieldset>
        </div>

        <div className='subDiv'>
        <fieldset>
          <legend>Subjects</legend>
          <div>
          <label>PART-I</label>
          </div>
        <div>
          <input value='ENGLISH' disabled></input>
        </div>
        <div>
          <div>
            <label>PART-II</label>
          </div>
          <input value='SANSKRIT ' disabled></input>
        </div>
        <div>
          <label>PART-III</label></div>
        <div>
          <input value='MATHEMATICS A' disabled ></input>
        </div>
        <div>
          <input value='MATHEMATICS B' disabled></input>
        </div>
        <div>
          <input value='PHYSICS' disabled></input>
        </div>
        <div>
          <input value='CHEMISTRY' disabled></input>
        </div>
        <div>
          <input value='PHYSICS PRACTICAL' disabled></input>
        </div>
        <div>
          <input value='CHEMISTRY PRACTICAL' disabled></input>
        </div>
        <div className='hidden'>
          <fieldset>
            <legend>
          <button type='button'>TOTAL</button>
          </legend>
          </fieldset>
        </div>
        </fieldset>
        </div>

        <div className='marksDiv'>
        <fieldset>
          <legend>Marks</legend>
          <div className='marksLabel'>
          <label>Marks</label>
          <label>Pass.Marks</label>
          </div>
        <div>
          <input value='100' disabled></input>
          <input value='35' disabled></input>          
        </div>
        <div>
          <div>
            <label className='hidden'>PART-II</label>
          </div>
          <input value='100' disabled></input>
          <input value='35' disabled></input>
        </div>
        <div> 
        <label className='hidden'>PART-III</label></div>
        <div>
          <input value='75' disabled ></input>
          <input value='26.25' disabled></input>
        </div>
        <div>
        <input value='75' disabled ></input>
        <input value='26.25' disabled></input>
        </div>
        <div>
        <input value='60' disabled ></input>
        <input value='21' disabled></input>
        </div>
        <div>
        <input value='60' disabled ></input>
        <input value='21' disabled></input>
        </div>
        <div>
        <input value='30' disabled ></input>
        <input value='10.5' disabled></input>
        </div>
        <div>
        <input value='30' disabled ></input>
        <input value='10.5' disabled></input>
        </div>
        <div className='hidden'>
          <fieldset>
            <legend>
          <button type='button'>TOTAL</button>
          </legend>
          </fieldset>
        </div>
        </fieldset>
        </div>

        <div className='marks1Div'>
        <fieldset>
          <legend><span ref={legendSpan1StuName}>Student</span><span>'s I Year Marks</span></legend>
          <div>
          <label className='hidden'>PART-I</label>
          </div>
        <div>
          <input type='number' ref={eng1InputRef}
             onFocus={()=>{
              onFocusInput(eng1InputRef);
            }}
            onChange={()=>{
              onChangeInput(eng1InputRef);
            }}
            onBlur={()=>{
              onBlurInput(eng1InputRef,eng1SpanRef);
              inputMarks100(eng1InputRef,eng1SpanRef);
            }}
            ></input>
          <span ref={eng1SpanRef}></span>  
        </div>
        <div>
          <div>
            <label className='hidden'>PART-II</label>
          </div>
          <input type='number' ref={sans1InputRef}
             onFocus={()=>{
              onFocusInput(sans1InputRef);
            }}
            onChange={()=>{
              onChangeInput(sans1InputRef);
            }}
            onBlur={()=>{
              onBlurInput(sans1InputRef,sans1SpanRef);
              inputMarks100(sans1InputRef,sans1SpanRef);
            }}
            ></input>
          <span ref={sans1SpanRef}></span>  
        </div>
        <div>
          <label className='hidden'>PART-III</label>
          </div>
        <div>
          <input type='number' ref={mathsA1InputRef}
             onFocus={()=>{
              onFocusInput(mathsA1InputRef);
            }}
            onChange={()=>{
              onChangeInput(mathsA1InputRef);
            }}
            onBlur={()=>{
              onBlurInput(mathsA1InputRef,mathsA1SpanRef);
              inputMarks75(mathsA1InputRef,mathsA1SpanRef);
            }}
            ></input>
          <span ref={mathsA1SpanRef}></span>  
        </div>
        <div>
          <input type='number' ref={mathsB1InputRef}
             onFocus={()=>{
              onFocusInput(mathsB1InputRef);
            }}
            onChange={()=>{
              onChangeInput(mathsB1InputRef);
            }}
            onBlur={()=>{
              onBlurInput(mathsB1InputRef,mathsB1SpanRef);
              inputMarks75(mathsB1InputRef,mathsB1SpanRef);
            }}
            ></input>
          <span ref={mathsB1SpanRef}></span>  
        </div>
        <div>
          <input type='number' ref={phy1InputRef}
             onFocus={()=>{
              onFocusInput(phy1InputRef);
            }}
            onChange={()=>{
              onChangeInput(phy1InputRef);
            }}
            onBlur={()=>{
              onBlurInput(phy1InputRef,phy1SpanRef);
              inputMarks60(phy1InputRef,phy1SpanRef);
            }}
            ></input>
          <span ref={phy1SpanRef}></span>  
        </div>
        <div>
          <input type='number' ref={chem1InputRef}
             onFocus={()=>{
              onFocusInput(chem1InputRef);
            }}
            onChange={()=>{
              onChangeInput(chem1InputRef);
            }}
            onBlur={()=>{
              onBlurInput(chem1InputRef,chem1SpanRef);
              inputMarks60(chem1InputRef,chem1SpanRef);
            }}
            ></input>
          <span ref={chem1SpanRef}></span>  
        </div>
        <div>
          <input type='number' className='hidden'></input>
        </div>
        <div>
          <input type='number' className='hidden'></input>
        </div>
        <div>
          <fieldset>
            <legend>
          <button type='button'
          onClick={()=>{
          tot1();
          inputParaStyle(totMarks1ParaRef);
          }}
          >TOTAL</button>
          </legend>
          <p ref={totMarks1ParaRef}></p>
          </fieldset>
        </div>
        </fieldset>
        </div>

        <div className='marks2Div'>
        <fieldset>
          <legend><span ref={legendSpan2StuName}>Student</span>'s II Year Marks</legend>
          <div>
          <label className='hidden'>PART-I</label>
          </div>
        <div>
          <input type='number' ref={eng2InputRef}
             onFocus={()=>{
              onFocusInput(eng2InputRef);
            }}
            onChange={()=>{
              onChangeInput(eng2InputRef);
            }}
            onBlur={()=>{
              onBlurInput(eng2InputRef,eng2SpanRef);
              inputMarks100(eng2InputRef,eng2SpanRef);
            }}
            ></input>
          <span ref={eng2SpanRef}></span>  
        </div>
        <div>
          <div>
            <label className='hidden'>PART-II</label>
          </div>
          <input type='number' ref={sans2InputRef}
             onFocus={()=>{
              onFocusInput(sans2InputRef);
            }}
            onChange={()=>{
              onChangeInput(sans2InputRef);
            }}
            onBlur={()=>{
              onBlurInput(sans2InputRef,sans2SpanRef);
              inputMarks100(sans2InputRef,sans2SpanRef);
            }}
            ></input>
          <span ref={sans2SpanRef}></span>  
        </div>
        <div>
          <label className='hidden'>PART-III</label></div>
        <div>
          <input type='number' ref={mathsA2InputRef}
             onFocus={()=>{
              onFocusInput(mathsA2InputRef);
            }}
            onChange={()=>{
              onChangeInput(mathsA2InputRef);
            }}
            onBlur={()=>{
              onBlurInput(mathsA2InputRef,mathsA2SpanRef);
              inputMarks75(mathsA2InputRef,mathsA2SpanRef);
            }}
            ></input>
          <span ref={mathsA2SpanRef}></span>  
        </div>
        <div>
          <input type='number' ref={mathsB2InputRef}
             onFocus={()=>{
              onFocusInput(mathsB2InputRef);
            }}
            onChange={()=>{
              onChangeInput(mathsB2InputRef);
            }}
            onBlur={()=>{
              onBlurInput(mathsB2InputRef,mathsB2SpanRef);
              inputMarks75(mathsB2InputRef,mathsB2SpanRef);
            }}
            ></input>
          <span ref={mathsB2SpanRef}></span>  
        </div>
        <div>
          <input type='number' ref={phy2InputRef}
             onFocus={()=>{
              onFocusInput(phy2InputRef);
            }}
            onChange={()=>{
              onChangeInput(phy2InputRef);
            }}
            onBlur={()=>{
              onBlurInput(phy2InputRef,phy2SpanRef);
              inputMarks60(phy2InputRef,phy2SpanRef);
            }}
            ></input>
          <span ref={phy2SpanRef}></span>  
        </div>
        <div>
          <input type='number' ref={chem2InputRef}
             onFocus={()=>{
              onFocusInput(chem2InputRef);
            }}
            onChange={()=>{
              onChangeInput(chem2InputRef);
            }}
            onBlur={()=>{
              onBlurInput(chem2InputRef,chem2SpanRef);
              inputMarks60(chem2InputRef,chem2SpanRef);
            }}
            ></input>
          <span ref={chem2SpanRef}></span>  
        </div>
        <div>
          <input type='number' ref={phyPracInputRef}
             onFocus={()=>{
              onFocusInput(phyPracInputRef);
            }}
            onChange={()=>{
              onChangeInput(phyPracInputRef);
            }}
            onBlur={()=>{
              onBlurInput(phyPracInputRef,phyPracSpanRef);
              inputMarks30(phyPracInputRef,phyPracSpanRef);
            }}
            ></input>
          <span ref={phyPracSpanRef}></span>  
        </div>
        <div>
          <input type='number' ref={chemPracInputRef}
             onFocus={()=>{
              onFocusInput(chemPracInputRef);
            }}
            onChange={()=>{
              onChangeInput(chemPracInputRef);
            }}
            onBlur={()=>{
              onBlurInput(chemPracInputRef,chemPracSpanRef);
              inputMarks30(chemPracInputRef,chemPracSpanRef);
            }}
            ></input>
          <span ref={chemPracSpanRef}></span>  
        </div>
        <div>
          <fieldset>
            <legend>
          <button type='button'
          onClick={()=>{
          tot2();
          inputParaStyle(totMarks2ParaRef);
          }}
          >TOTAL</button>
          </legend>
          <p ref={totMarks2ParaRef}></p>
          </fieldset>
        </div>
        </fieldset>
        </div>

        <div className='resultsDiv'>
          <fieldset>
            <legend><button type='button'
            onClick={()=>{
              // tot1();
              // tot2();
              // let tot12=tot1+tot2;
              // totMarks12ParaRef.current.innerHTML= tot12;
              tot12();
              inputParaStyle(totMarks12ParaRef);
            }}
            >RESULT</button></legend>
          <p ref={totMarks12ParaRef}></p>
        </fieldset>
        </div>
      </form>
    </div>
  )
}

export default StuForm
