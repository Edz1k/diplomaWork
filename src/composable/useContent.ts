// eslint-disable-next-line no-unused-vars
import { collection, deleteDoc, doc, getDocs, addDoc, type DocumentData } from 'firebase/firestore'
import { db } from '@/firebase'
// eslint-disable-next-line no-unused-vars
// import { getStorage, uploadBytes, getDownloadURL } from 'firebase/storage'
import { ref } from 'vue'
import { useUser } from './useAnything'
import { createId } from '@/services/method'

const content = ref()
const newContent = ref({
  id: '',
  author: '',
  text: '',
  photo: '',
  stars: 4,
  date: 0,
})
const contentList = ref([] as DocumentData)

export const useContent = () => {

  const loading = ref({
    content: false,
    contentList: false,
    newContent: false
  })

  async function getAllContent() {
    loading.value.contentList = true
    contentList.value.length = 0;
    try {
      const querySnapshot = await getDocs(collection(db, 'content'))
      querySnapshot.forEach((doc) => {
        contentList.value.push(doc.data())
      })
      loading.value.contentList = false
    } catch (error) {
      console.error(error)
    }
  }

  async function addContent() {
    const { user } = useUser()
    loading.value.newContent = true
    try {
      if (newContent.value && user.value) {
        newContent.value.author = user.value.displayName
        newContent.value.photo = user.value.photoURL
        newContent.value.date = new Date().getTime()
        newContent.value.id = createId();
        const res = await addDoc(collection(db, 'content'), newContent.value)
        loading.value.newContent = false
        
        return res
        
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function deleteContent(id: string) {
    loading.value.content = true
    try {
      await deleteDoc(doc(db, 'content', id))
      loading.value.content = false
    } catch (error) {
      console.error(error)
    }
  }

  async function getContentById(id: string) {
    loading.value.content = true
    try {
      const querySnapshot = await getDocs(collection(db, 'content'))
      querySnapshot.forEach((doc) => {
        if (doc.id === id) {
          content.value = doc.data()
        }
      })
      loading.value.content = false
    } catch (error) {
      console.error(error)
    }
  }

  return {
    content,
    newContent,
    getContentById,
    addContent,
    deleteContent,
    getAllContent,
    contentList,
    loading
  }
}
