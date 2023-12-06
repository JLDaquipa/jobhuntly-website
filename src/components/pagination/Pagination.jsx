/* eslint-disable react/prop-types */
import React, {Fragment, useEffect, useState } from "react";

const Pagination= ({ dataPerPage, getData, currentPageData, navigation, getStyle }) => {
  const pageNumbers = [];
  const showPagination = [];
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPageState, setDataPerPageState] = useState();
  const [navigationState, setNavigationState] = useState(false);
  const [showPaginationState, setShowPaginationState] = useState([1,2,3,4,5]);
  const [style, setStyle]=useState('');
  const [styleCustom, setStyleCustom] = useState('');
  const [newPageData, setNewPageData] = useState([1,2,3,4,5]);



  for (let i = 1; i <= Math.ceil(getData.length / dataPerPageState); i++) {
    pageNumbers.push(i);
  }



  useEffect(() => {
    for (let i = 1; i <= 5; i++) {
      showPagination.push(i);
    }
  }, [])


  // update item on button chick
  useEffect(() => {
    // update right to left
    if (currentPage === showPaginationState.at(-1)) {
      if (showPaginationState.at(-1) === pageNumbers.at(-2)) {
        showPaginationState.shift();
        setShowPaginationState([...showPaginationState, currentPage + 1])
      }

      else if (showPaginationState.at(-1) <= pageNumbers.at(-3)) {
        showPaginationState.shift();
        showPaginationState.shift();
        setShowPaginationState([...showPaginationState, currentPage + 1, currentPage + 2])
      }
    }

    else if (currentPage === showPaginationState.at(-2)) {
      if (showPaginationState.at(-2) === pageNumbers.at(-2)) {
        setShowPaginationState([...showPaginationState])
      }
      else if (showPaginationState.at(-1) <= pageNumbers.at(-1)) {
        showPaginationState.shift();
        setShowPaginationState([...showPaginationState, currentPage + 2])
      }

    }


    //  update left to right 
    if (pageNumbers.at(1) <= showPaginationState.at(0)) {

      if (pageNumbers.at(1) === currentPage) {
        showPaginationState.unshift(currentPage - 1);
        showPaginationState.pop();
      }
      else if (showPaginationState.at(0) === currentPage) {
        showPaginationState.unshift(currentPage - 2, currentPage - 1);
        showPaginationState.pop();
        showPaginationState.pop();
      }
      else if (currentPage === showPaginationState.at(1)) {
        showPaginationState.unshift(currentPage - 2);
        showPaginationState.pop();
      }

    }

  }, [currentPage])

  //  initialize page data
  useEffect(() => {
    if (!dataPerPage) {
      setDataPerPageState(10);
    } else {
      setDataPerPageState(dataPerPage);
    }
  }, [dataPerPage, getData]);

  // Navigation State Update
  useEffect(() => {
    setNavigationState(navigation);
  }, [navigation]);

  // Get current Data
  const indexOfLastPost = currentPage * dataPerPageState;
  const indexOfFirstPost = indexOfLastPost - dataPerPageState;
  const NewCurrentPageData = getData.slice(indexOfFirstPost, indexOfLastPost);

  


  
  useEffect(() => {
    currentPageData(NewCurrentPageData);
    if(pageNumbers.length > 10){
      setNewPageData(NewCurrentPageData)
    }
  }, [currentPage, dataPerPageState, getData]);



useEffect(()=>{
  if(newPageData.length===0){
        showPaginationState.pop();
        setCurrentPage(showPaginationState.at(-1))
  }
},[newPageData.length===0])




  const handleCurrentPage = (pageNumber) => {
    setCurrentPage(pageNumber);

  }

  const handleDirectFirstPage = () => {
    setShowPaginationState([1, 2, 3, 4, 5])
  }

  const handleDirectLastPage = () => {
    setShowPaginationState([pageNumbers.at(-5), pageNumbers.at(-4), pageNumbers.at(-3), pageNumbers.at(-2), pageNumbers.at(-1)])
  }


  // button style section 

  useEffect(()=>{
    if(!getStyle){
      setStyle('sweetPagination')
      setStyleCustom('')
    }
    else if(getStyle && getStyle !== 'style-custom'){
      setStyle(getStyle)
      setStyleCustom('')
    }
    else if(getStyle === 'style-custom'){
      setStyleCustom('style-custom')
    }
  
  },[getStyle])


// Main button function 

if (pageNumbers.length > 10) {
  return (
    <nav className={`flex justify-center text-neutral-80 ${style}`}>
      <ul className="flex justify-center gap-4">

        {/* preview navigation  */}
        {navigationState &&
          (currentPage === 1 ? (
            <li className="flex items-center justify-between">
              <button className="w-11 h-11">
                <i className="ri-arrow-left-s-line text-2xl font-semibold text-neutral-60"></i>
              </button>
            </li>
          ) : (
            <li className="flex items-center justify-between">
              <button
                onClick={() => handleCurrentPage(currentPage - 1)}
                className="w-11 h-11"
              >
                <i className="ri-arrow-left-s-line text-2xl font-semibold"></i>
              </button>
            </li>
          ))}



        {/* first page  */}
        {
          showPaginationState.at(0) > pageNumbers.at(0) &&

          <Fragment>
            <li className="pageItem">
              <button
                onClick={() => { handleCurrentPage(pageNumbers.at(0)); handleDirectFirstPage() }}
                className={
                  currentPage === pageNumbers.at(0)
                    ? "flex items-center justify-center font-semibold w-11 h-11 rounded-md bg-brand-primary text-white transition ease-in-out"
                    : `flex items-center justify-center font-semibold w-11 h-11 rounded-md transition ease-in-out`
                }
              >
                {pageNumbers.at(0)}
              </button>
            </li>

            <li className="flex items-end">
              <button className="">
              <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg> 
              </button>
            </li>
          </Fragment>
        }
        {showPaginationState.map((number) => (
          <li key={number} className="pageItem">
            <button
              onClick={() => handleCurrentPage(number)}
              className={
                currentPage === number
                  ? "flex items-center justify-center font-semibold w-11 h-11 rounded-md bg-brand-primary text-white transition ease-in-out"
                  : `flex items-center justify-center font-semibold w-11 h-11 rounded-md transition ease-in-out`
              }
            >
              {number}
            </button>
          </li>
        ))}


        {/* Lase Page  */}
        {
          showPaginationState.at(-1) < pageNumbers.at(-1) &&
          <>
            <li className="flex items-end">
              <button className="">
                <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
              </button>
            </li>
            <li className="pageItem">
              <button
                onClick={() => { handleCurrentPage(pageNumbers.at(-1)); handleDirectLastPage() }}
                className={
                  currentPage === pageNumbers.at(-1)
                    ? "flex items-center justify-center font-semibold w-11 h-11 rounded-md bg-brand-primary text-white transition ease-in-out"
                    : `flex items-center justify-center font-semibold w-11 h-11 rounded-md transition ease-in-out`
                }
              >
                {pageNumbers.at(-1)}
              </button>
            </li>
          </>
        }



        {/* next navigation  */}
        {navigationState &&
          (currentPage === pageNumbers.at(-1) ? (
            <li className="flex items-center justify-between">
              <button className="w-11 h-11">
              <i className="ri-arrow-right-s-line text-2xl font-semibold text-neutral-60"></i>
              </button>
            </li>
          ) : (
            <li className="flex items-center justify-between">
              <button
                onClick={() => handleCurrentPage(currentPage + 1)}
                className="w-11 h-11"
              >
                <i className="ri-arrow-right-s-line text-2xl font-semibold"></i>
              </button>
            </li>
          ))}
      </ul>
    </nav>
  );
}

  return (
    <nav className={`flex justify-center text-neutral-80 ${style}`}>
      <ul className="flex justify-center gap-4">
        {pageNumbers.map((number) => (
          <li key={number} className="">
            <button
              onClick={() => handleCurrentPage(number)}
              className={
                currentPage === number
                  ? "flex items-center justify-center font-semibold w-11 h-11 rounded-md bg-brand-primary text-white transition ease-in-out"
                  : `flex items-center justify-center font-semibold w-11 h-11 rounded-md transition ease-in-out`
              }
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;