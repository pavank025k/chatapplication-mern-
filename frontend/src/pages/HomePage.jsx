import { useChatStore } from "../store/useChatStore";
import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-screen bg-gray-900">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-6xl h-[calc(100vh-8rem)] overflow-hidden">
          <div className="flex h-full rounded-xl overflow-hidden">
            <Sidebar />

            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;


