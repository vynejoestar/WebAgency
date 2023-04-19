'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { BiSearch } from 'react-icons/bi';
import { differenceInDays } from 'date-fns';

import useSearchModal from '@/app/hooks/useSearchModal';
import useCountries from '@/app/hooks/useCountries';

const Search = () => {
  const searchModal = useSearchModal();
  const params = useSearchParams();
  const { getByValue } = useCountries();

  const  locationValue = params?.get('locationValue'); 
  const  startDate = params?.get('startDate');
  const  endDate = params?.get('endDate');
  const  guestCount = params?.get('guestCount');

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return getByValue(locationValue as string)?.label;
    }

    return 'Where to';
  }, [locationValue, getByValue]);

  const durationLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate as string);
      const end = new Date(endDate as string);
      let diff = differenceInDays(end, start);

      if (diff === 0) {
        diff = 1;
      }

      return `${diff} Days`;
    }

    return 'Any Time'
  }, [startDate, endDate]);

  const guestLabel = useMemo(() => {
    if (guestCount) {
      return `${guestCount} Guests`;
    }

    return 'Add Guests';
  }, [guestCount]);
  return (
    <div 
        onClick={searchModal.onOpen}
        className="border-[1px]
        w-full
        md:w-auto
        py-2
        rounded-full
        shadow-sm
        hover:shadow-md
        hover:border-dark-blue
        transition
        cursor-pointer
        sm:ml-7"
    >
        <div 
        className="
            flex
            flex-row
            items-center
            justify-between">
                <div 
                className="
                text-sm
                font-semibold
                px-6">
                    <div
                        className='flex flex-row items-center justify-between gap-2'>
                        <div className='hidden sm:block'>
                        <svg width="30" height="31" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_111_47)">
                        <path d="M35 20.5C35 28.509 28.509 35 20.5 35C12.491 35 5.99997 28.509 5.99997 20.5C5.99997 12.491 12.491 6 20.5 6C28.509 6 35 12.491 35 20.5ZM8.92716 22.7146L10.7244 23.0771C11.1696 23.1678 11.6306 23.0262 11.9529 22.7033L12.8252 21.8311C13.4765 21.1287 14.5867 21.3553 15.0002 22.1879L15.5269 23.2357C15.7478 23.7795 16.3539 24.074 16.9599 24.074C17.8209 24.074 18.4383 23.298 18.189 22.4711L17.8549 21.3439C17.5886 20.4717 18.2457 19.5938 19.1576 19.5938H19.2879C19.9959 19.5938 20.7549 19.2143 21.174 18.5855L21.78 17.6736C22.0972 17.1979 22.0802 16.5691 21.7347 16.1047L20.8228 14.8869C20.2394 14.1109 20.6359 12.9895 21.5818 12.7516L22.5447 12.4627C22.9695 12.4061 23.315 12.1059 23.4793 11.698L24.4025 9.38088C23.1847 8.95211 21.8707 8.71875 20.449 8.71875C13.992 8.71875 8.66774 13.992 8.66774 20.5C8.66774 21.259 8.79009 22.001 8.92716 22.7146ZM31.5109 23.0148L30.616 23.2697C30.2365 23.3717 29.8343 23.2188 29.6248 22.8902L29.5115 22.7146C29.1716 22.1822 28.5826 21.8084 27.9482 21.8084C27.3195 21.8084 26.6795 22.1822 26.3849 22.7146L26.0394 23.2527C25.9601 23.3773 25.8525 23.485 25.7222 23.5076L23.6209 24.6971C22.6467 25.2691 22.2275 26.5322 22.658 27.6027L23.0205 28.3051C23.5076 29.3926 24.7593 29.9193 25.8299 29.5002L26.0224 29.3982C26.5945 29.234 27.2289 29.3246 27.7216 29.6814L27.8066 29.7438C29.9136 28.0729 31.4373 25.6996 32.0207 22.9752C31.8507 22.9582 31.6808 22.9695 31.5109 23.0148ZM14.8416 26.8154L16.6541 27.2686C17.1412 27.3932 17.634 27.0986 17.7529 26.6115C17.8775 26.1244 17.583 25.6316 17.0959 25.5127L15.2834 25.0596C14.7963 24.935 14.3035 25.2295 14.1845 25.7166C14.0599 26.2037 14.3545 26.6965 14.8416 26.8154ZM19.3955 24.5838C19.2709 25.0709 19.5654 25.5637 20.0525 25.6826C20.5396 25.8072 21.0324 25.5127 21.1513 25.0256L21.6045 23.2131C21.7291 22.726 21.4345 22.2332 20.9474 22.1143C20.4603 21.9896 19.9675 22.2842 19.8486 22.7713L19.3955 24.5838ZM24.2213 12.8422L23.315 14.6547C23.0884 15.1021 23.2697 15.6516 23.7172 15.8725C24.1646 16.099 24.714 15.9178 24.9349 15.4703L25.8412 13.6578C26.0677 13.2104 25.8865 12.6609 25.439 12.44C24.9916 12.2135 24.4422 12.3947 24.2213 12.8422Z" fill="#0905A5"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_111_47">
                        <rect width="29" height="29" fill="white" transform="translate(5.99997 6)"/>
                        </clipPath>
                        </defs>
                        </svg>
                        </div>
                    {locationLabel}

                     </div>
                </div>
                <div className="
                  sm:block
                  text-sm
                  font-semibold
                  px-6
                  border-x-[1px]
                  text-center
                  
                  "
                  >
                    <div className='flex flex-row items-center justify-between gap-2'>
                    <div className='hidden sm:block'>
                    <svg width="30" height="31" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_111_50)">
                    <path d="M6.99997 32.2819C6.99997 33.7828 8.24774 35.0006 9.78568 35.0006H30.2143C31.7522 35.0006 33 33.7828 33 32.2819V16.8756H6.99997V32.2819ZM25.5714 21.1803C25.5714 20.8065 25.8848 20.5006 26.2678 20.5006H28.5893C28.9723 20.5006 29.2857 20.8065 29.2857 21.1803V23.4459C29.2857 23.8198 28.9723 24.1256 28.5893 24.1256H26.2678C25.8848 24.1256 25.5714 23.8198 25.5714 23.4459V21.1803ZM25.5714 28.4303C25.5714 28.0565 25.8848 27.7506 26.2678 27.7506H28.5893C28.9723 27.7506 29.2857 28.0565 29.2857 28.4303V30.6959C29.2857 31.0698 28.9723 31.3756 28.5893 31.3756H26.2678C25.8848 31.3756 25.5714 31.0698 25.5714 30.6959V28.4303ZM18.1428 21.1803C18.1428 20.8065 18.4562 20.5006 18.8393 20.5006H21.1607C21.5437 20.5006 21.8571 20.8065 21.8571 21.1803V23.4459C21.8571 23.8198 21.5437 24.1256 21.1607 24.1256H18.8393C18.4562 24.1256 18.1428 23.8198 18.1428 23.4459V21.1803ZM18.1428 28.4303C18.1428 28.0565 18.4562 27.7506 18.8393 27.7506H21.1607C21.5437 27.7506 21.8571 28.0565 21.8571 28.4303V30.6959C21.8571 31.0698 21.5437 31.3756 21.1607 31.3756H18.8393C18.4562 31.3756 18.1428 31.0698 18.1428 30.6959V28.4303ZM10.7143 21.1803C10.7143 20.8065 11.0276 20.5006 11.4107 20.5006H13.7321C14.1151 20.5006 14.4285 20.8065 14.4285 21.1803V23.4459C14.4285 23.8198 14.1151 24.1256 13.7321 24.1256H11.4107C11.0276 24.1256 10.7143 23.8198 10.7143 23.4459V21.1803ZM10.7143 28.4303C10.7143 28.0565 11.0276 27.7506 11.4107 27.7506H13.7321C14.1151 27.7506 14.4285 28.0565 14.4285 28.4303V30.6959C14.4285 31.0698 14.1151 31.3756 13.7321 31.3756H11.4107C11.0276 31.3756 10.7143 31.0698 10.7143 30.6959V28.4303ZM30.2143 9.62561H27.4285V6.90686C27.4285 6.40842 27.0107 6.00061 26.5 6.00061H24.6428C24.1321 6.00061 23.7143 6.40842 23.7143 6.90686V9.62561H16.2857V6.90686C16.2857 6.40842 15.8678 6.00061 15.3571 6.00061H13.5C12.9893 6.00061 12.5714 6.40842 12.5714 6.90686V9.62561H9.78568C8.24774 9.62561 6.99997 10.8434 6.99997 12.3444V15.0631H33V12.3444C33 10.8434 31.7522 9.62561 30.2143 9.62561Z" fill="#0905A5"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_111_50">
                    <rect width="26" height="29" fill="white" transform="translate(6.99997 6)"/>
                    </clipPath>
                    </defs>
                    </svg>
                    </div>
                     {durationLabel}
                    </div>
                </div>
                <div 
                className="
                text-sm
                pl-4
                pr-2
                font-semibold
                flex
                flex-row
                items-center
                gap-3
                ">
                    <div 
                    className='flex flex-row items-center justify-between gap-2'>
                    <div className='hidden sm:block'>
                    <svg width="30" height="31" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.3571 13.25H25.5742L25.575 8.71875C25.575 7.21777 24.3272 6 22.7892 6H17.2178C15.6799 6 14.4321 7.21777 14.4321 8.71875L14.4285 13.25H11.6428C10.1048 13.25 8.85706 14.4678 8.85706 15.9688V30.4688C8.85706 31.9697 10.1048 33.1875 11.6428 33.1875H12.5742L12.5713 34.0938C12.5713 34.5979 12.9834 35 13.4999 35H15.3571C15.8736 35 16.2856 34.5979 16.2856 34.0938L16.2914 33.1875H23.72L23.7142 34.0938C23.7142 34.5964 24.1277 35 24.6428 35H26.4999C27.015 35 27.4285 34.5964 27.4285 34.0938L27.4313 33.1875H28.3571C29.895 33.1875 31.1428 31.9697 31.1428 30.4688V15.9688C31.1428 14.4678 29.895 13.25 28.3571 13.25ZM17.22 8.71875H22.7914V13.25H17.22V8.71875ZM26.4999 27.75H13.4999C12.9892 27.75 12.5713 27.3422 12.5713 26.8438C12.5713 26.3453 12.9892 25.9375 13.4999 25.9375H26.4999C27.0107 25.9375 27.4285 26.3453 27.4285 26.8438C27.4285 27.3422 27.0106 27.75 26.4999 27.75ZM26.4999 20.5H13.4999C12.9892 20.5 12.5713 20.0922 12.5713 19.5938C12.5713 19.0953 12.9892 18.6875 13.4999 18.6875H26.4999C27.0106 18.6875 27.4285 19.0953 27.4285 19.5938C27.4285 20.0922 27.0106 20.5 26.4999 20.5Z" fill="#0905A5"/>
                    </svg>
                    </div>
                    {guestLabel}
                    </div>
                </div>
                <div
                className="p-2
                ml-3
                border-2
                bg-dark-blue
                rounded-full
                font-bold
                text-white
                mr-5">
                    <BiSearch size={16}/>
                </div>
        </div>
    </div>
  );
}

export default Search;