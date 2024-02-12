import { db } from '@/db';
import { Chip } from '@nextui-org/react';
import Link from 'next/link';
import paths from '@/paths';

export default async function TopicList() {
  const topics = await db.topic.findMany();

  return (
    <div className="flex flew-row gap-2 flex-wrap">
      {topics.map((topic) => {
        return (
          <div key={topic.id}>
            <Link href={paths.topicShow(topic.slug)}>
              <Chip color="warning" variant="shadow">
                {topic.slug}
              </Chip>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
