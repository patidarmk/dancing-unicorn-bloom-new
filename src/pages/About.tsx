import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>About TaskFlow</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert">
          <p>
            TaskFlow is a modern, elegantly designed to-do application built to help you stay organized and productive. 
            It's crafted with the latest web technologies to provide a seamless and enjoyable user experience.
          </p>
          <p>
            This application was created with Applaa, an AI-powered tool that helps developers build premium web applications in real-time.
          </p>
          <h3>Features</h3>
          <ul>
            <li>Add new tasks with ease.</li>
            <li>Mark tasks as complete.</li>
            <li>Delete tasks you no longer need.</li>
            <li>A clean, responsive, and modern user interface.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;