
import React from 'react';
import Links from './Links';
import { useQuery, gql } from '@apollo/client';

export const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        createdAt
        url
        description
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`;
  const Linklist = () => {
    const { data } = useQuery(FEED_QUERY);
  
    return (
        <div>
          {data && (
            <>
              {data.feed.links.map((link, index) => (
                <Links key={link.id} link={link} index={index} />
              ))}
            </>
          )}
        </div>
      );

export default Linklist;